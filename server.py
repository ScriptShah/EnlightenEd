from flask import Flask, jsonify, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

courses = []

def load_data():
    global courses
    try:
        with open("courses.json", "r") as file:
            courses = json.load(file)
    except FileNotFoundError:
        courses = []

def save_data():
    with open("courses.json", "w") as file:
        json.dump(courses, file)

@app.route("/courses", methods=["GET"])
def get_courses():
    return jsonify(courses)

@app.route("/courses", methods=["POST"])
def add_course():
    new_course = request.get_json()
    new_course["id"] = len(courses) + 1
    courses.append(new_course)
    save_data()
    return jsonify(new_course)

@app.route("/courses/<int:course_id>", methods=["DELETE"])
def delete_course(course_id):
    course = next((course for course in courses if course["id"] == course_id), None)
    if course:
        courses.remove(course)
        save_data()
        return jsonify({"message": "Course deleted"})
    else:
        return jsonify({"message": "Course not found"}), 404

if __name__ == "__main__":
    load_data()
    app.run(debug=True)