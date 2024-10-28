# app/main.py
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.responses import JSONResponse
from app.services import process_pdf, get_answer

app = FastAPI()

@app.post("/upload-pdf/")
async def upload_pdf(file: UploadFile = File(...)):
    if file.content_type != "application/pdf":
        raise HTTPException(status_code=400, detail="Invalid file type. Please upload a PDF.")
    file_location = f"app/storage/{file.filename}"
    with open(file_location, "wb") as f:
        f.write(await file.read())
    # Process the PDF and save content (add more as needed)
    document_id = process_pdf(file_location)
    return {"documentId": document_id}

@app.post("/ask/")
async def ask_question(documentId: str, question: str):
    try:
        answer = get_answer(documentId, question)
        return {"answer": answer}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
