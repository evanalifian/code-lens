import json
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score
import pickle


# load datasets
with open("./datasets/code_dataset.json", "r", encoding="utf-8") as f:
  data_json = json.load(f)

df = pd.DataFrame(data_json)
# end load datasets


# separate feature and label
X = df["code"]
y = df["language"]
# end separate feature and label


# TF-IDF vectorization
vectorizer = TfidfVectorizer()
X_vectorized = vectorizer.fit_transform(X)
# end TF-IDF vectorization


# split data training and testing
X_train, X_test, y_train, y_test = train_test_split(X_vectorized, y, test_size = 0.2, random_state = 42)
# end split data training and testing


# training model (naive bayes)
model = MultinomialNB()
model.fit(X_train, y_train)
# end training model


# evaluate model
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)

print("Accuracy:", accuracy)
# end evaluate model


# manual testing
sample = ["for i in"]

sample_vector = vectorizer.transform(sample)

prediction = model.predict(sample_vector)

print(prediction)
# end manual testing


# store model
pickle.dump(model, open("model.pkl", "wb"))
pickle.dump(vectorizer, open("vectorizer.pkl", "wb"))
# end store model