from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

todos = [
    {"id": 1, "title": "Buy groceries"},
    {"id": 2, "title": "Go to the gym"},
    {"id": 3, "title": "Do laundry"},
]

@app.route("/todos", methods=["GET"])
def get_todos():
    return jsonify(todos)

@app.route("/todos", methods=["POST"])
def add_todo():
    new_todo = request.get_json()
    new_todo["id"] = len(todos) + 1
    todos.append(new_todo)
    return jsonify(new_todo)

@app.route("/todos/<int:todo_id>", methods=["DELETE"])
def delete_todo(todo_id):
    todo = next((todo for todo in todos if todo["id"] == todo_id), None)
    if todo:
        todos.remove(todo)
        return jsonify({"message": "Todo deleted"})
    else:
        return jsonify({"message": "Todo not found"}), 404

if __name__ == "__main__":
    app.run(debug=True)