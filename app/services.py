# app/services.py
import fitz  # PyMuPDF for PDF text extraction

import os
from langchain.chat_models import ChatOpenAI
from langchain.prompts import PromptTemplate
from dotenv import load_dotenv

load_dotenv()

# Initialize the Chat Model
openai_api_key = os.getenv("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")

chat_model = ChatOpenAI(api_key=openai_api_key)

# Dictionary to hold processed documents (for simplicity)
documents = {}

def process_pdf(file_path):
    """Extract text from the PDF and store it."""
    with fitz.open(file_path) as pdf:
        text = ""
        for page_num in range(pdf.page_count):
            text += pdf[page_num].get_text()
    document_id = str(len(documents) + 1)  # Simple ID generation
    documents[document_id] = text
    return document_id

def get_answer(document_text, question):
    """Use the chat model to answer questions based on document content."""
    prompt_template = f"Given the following document: \n\n{document_text}\n\nAnswer the question: {question}"
    response = chat_model.generate(prompt_template)
    return response.text  # Customize this based on the response format
