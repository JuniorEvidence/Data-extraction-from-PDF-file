# PDF Data Extraction Service

A FastAPI-based backend service that allows users to upload PDF documents and ask questions about their content. This service uses LangChain for natural language processing and provides endpoints to handle PDF uploads and queries.

## Features

- **Upload PDF**: Users can upload PDF files, which will be processed and stored.
- **Ask Questions**: Users can ask questions related to the content of the uploaded PDF files.
- **Easy Integration**: Designed to work seamlessly with a React frontend for a complete web application experience.

## Technologies Used

- **Backend**: FastAPI
- **Frontend**: React.js (Optional - for the UI)
- **Natural Language Processing**: LangChain
- **PDF Processing**: Python Libraries
- **Environment Management**: Python `virtualenv`

## Getting Started

### Prerequisites

- Python 3.x
- Node.js (if you're setting up the React frontend)
- `pip` (Python package manager)
- `curl` or Postman for testing API endpoints

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/JuniorEvidence/Data-extraction-from-PDF-file.git
   cd Data-extraction-from-PDF-file
2. Set up a virtual environment:
    python -m venv env
    source env/bin/activate  # On Windows use `env\Scripts\activate`
3. Install required Python packages:
     pip install -r requirements.txt
4. Start the FastAPI server:
      uvicorn app.main:app --reload
