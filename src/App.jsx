import { useState, useEffect } from "react";

 const App = () => {
  const [task, setTask] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const fetchdata = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/task");
    const data = await response.json();
    setTask(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchdata();
  }, []);
 
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    if (editingId) {
      await fetch(`http://127.0.0.1:8000/api/task/${editingId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      setEditingId(null);
    } else {
      await fetch('http://127.0.0.1:8000/api/task', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
    }
    setName("");
    fetchdata();
  };
  const handelEdit = (item) => {
    setName(item.name);
    setEditingId(item.id);
  };
  const handelDelete = async (id) => {
    await fetch(`http://127.0.0.1:8000/api/task/${id}`, {
      method: "DELETE",
    });
  };

  if (loading) {
    return (
      <div className="message">
        <h2>Loading user Data...</h2>
      </div>
    );
  }

  return (
    <div className="ml-20">
      <div className="mt-9 ml-20 font-bold">
        <h1>Frontend API Lessons</h1>
      </div>
      <div className="m-7">
        <form onSubmit={handelSubmit}>
          <input
            type="text"
            placeholder="enter your name"
            id="name"
            name="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <button type="submit" className="border-2 w-20 bg-green-300">
            {editingId ? "Update" : "Add"}
          </button>
          {editingId && (
            <button
              type="submit"
              className="border-2 w-20 bg-green-300"
              onClick={() => {
                setEditingId(null);
                setName("");
              }}
            >
              Cancel
            </button>
          )}
        </form>
      </div>

      <div class="relative w-96 bg-amber-200 shadow-xs rounded-base border-collapse   ">
        <table class="w-full  text-sm text-left rtl:text-right text-body">
          <thead class="text-sm text-body bg-amber-200  rounded-base ">
            <tr>
              <th scope="col" class="px-6 py-3 font-medium border border-black">
                Id
              </th>
              <th scope="col" class="px-6 py-3 font-medium border border-black">
                Name
              </th>
              <th scope="col" class="px-6 py-3 font-medium border border-black">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {task.map((tasks) => (
              <tr class="bg-neutral-primary " key={tasks.id}>
                <td
                  scope="row"
                  class="px-6 py-4 font-medium text-heading whitespace-nowrap border border-black"
                >
                  {tasks.id}
                </td>
                <td class="px-6 py-4 border border-black">{tasks.name}</td>
                <td class="px-6 py-4 flex gap-2 border border-black">
                  <button
                    className="border-2 w-20 bg-amber-300"
                    onClick={() => handelEdit(tasks)}
                  >
                    Edit
                  </button>
                  <button
                    className="border-2 w-20 bg-red-400"
                    onClick={() => handelDelete(tasks.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
