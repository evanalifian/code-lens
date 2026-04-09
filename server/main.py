import pickle
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

model = pickle.load(open("model.pkl", "rb"))
vectorizer = pickle.load(open("vectorizer.pkl", "rb"))

class CodeInput(BaseModel):
    code: str

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/predict")
def predict(data: CodeInput):

    print("Incoming code:", data.code)

    vector = vectorizer.transform([data.code])

    prediction = model.predict(vector)[0]

    probability = model.predict_proba(vector).max()

    return {
        "language": prediction,
        "confidence": float(probability)
    }