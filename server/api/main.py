import pickle
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

model = pickle.load(open("model.pkl", "rb"))
vectorizer = pickle.load(open("vectorizer.pkl", "rb"))

class CodeInput(BaseModel):
    code: str

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "CodeLens API running"}

@app.post("/predict")
def predict(data: CodeInput):

    vector = vectorizer.transform([data.code])

    prediction = model.predict(vector)[0]
    probability = model.predict_proba(vector).max()

    return {
        "language": prediction,
        "confidence": float(probability)
    }