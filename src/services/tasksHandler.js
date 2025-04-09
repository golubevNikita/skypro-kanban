import axios from "axios";

const url = "https://wedev-api.sky.pro/api/kanban";

export async function getTask({ taskId, token }) {
  try {
    const data = await axios.get(url + "/" + taskId, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "",
      },
    });

    return data;
  } catch (error) {
    return error;
  }
}

export async function getTasks(token) {
  try {
    const data = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "",
      },
    });

    return data;
  } catch (error) {
    return error;
  }
}

export async function taskDelete({ deletedTaskId, token }) {
  try {
    const data = await axios.delete(url + "/" + deletedTaskId, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "",
      },
    });

    return data;
  } catch (error) {
    return error;
  }
}

export async function taskChange({ changedTaskId, newData, token }) {
  try {
    const data = await axios.put(url + "/" + changedTaskId, newData, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "",
      },
    });

    return data;
  } catch (error) {
    return error;
  }
}

export async function taskAdd({ newTaskInfo, token }) {
  try {
    const data = await axios.post(url, newTaskInfo, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "",
      },
    });

    return data;
  } catch (error) {
    return error;
  }
}
