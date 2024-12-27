import React, { useState } from "react";
import "./Setting.css";
export default function Setting() {
  const [displayManageArtist, setDisplayArtist] = useState(false);
  const [displayManageListener, setDisplayListener] = useState(false);

  const [getRole, setGetRole] = useState(localStorage.getItem("role"));
  const [list_User, setList_User] = useState(JSON.parse(localStorage.getItem("list_User")));

  // danh sách Artist và chỉnh sửa thông tin artist
  const [list_Artist, setList_Artist] = useState(list_User.filter((item) => item.role === "artist"));

  const [list_Listener, setList_Listener] = useState(list_User.filter(item => item.role === 'listener'));
  const deleteArtist = (id) => {
    const newList_User = list_User.filter((item) => item.id !== id);
    console.log(newList_User);
    localStorage.setItem("list_User", JSON.stringify(newList_User));
    setList_User(newList_User);
    setList_Artist(newList_User.filter((item) => item.role === "artist"));
  };

  const changeEmail = (value, id) => {
    let newList_User = list_User;
    for (let i = 0; i < newList_User.length; i++) {
      if (newList_User[i].id === id) {
        newList_User[i].email = value;
        localStorage.setItem("list_User", JSON.stringify(newList_User));
        setList_User([...newList_User]);
      }
    }
  };
  const changeRole = (value, id) => {
    let newList_User = list_User;
    for (let i = 0; i < newList_User.length; i++) {
      if (newList_User[i].id === id) {
        newList_User[i].role = value;
        localStorage.setItem("list_User", JSON.stringify(newList_User));
        setList_User([...newList_User]);
      }
    }
  };
  const changeUsername = (value, id) => {
    let newList_User = list_User;
    for (let i = 0; i < newList_User.length; i++) {
      if (newList_User[i].id === id) {
        newList_User[i].username = value;
        localStorage.setItem("list_User", JSON.stringify(newList_User));
        setList_User([...newList_User]);
      }
    }
  };
  const changePassword = (value, id) => {
    let newList_User = list_User;
    for (let i = 0; i < newList_User.length; i++) {
      if (newList_User[i].id === id) {
        newList_User[i].password = value;
        localStorage.setItem("list_User", JSON.stringify(newList_User));
        setList_User([...newList_User]);
      }
    }
  };

  // thêm artist
  const [newArtistEmail, setEmailArtist] = useState("");
  const [newArtistRole, setRoleArtist] = useState("");
  const [newArtistUsername, setUsernameArtist] = useState("");
  const [newArtistPassword, setPasswordArtist] = useState("");
  const addArtist = (e) => {
    e.preventDefault();
    const new_artist = {
      username: newArtistUsername,
      email: newArtistEmail,
      password: newArtistPassword,
      role: newArtistRole,
      id: new Date(),
    };

    setList_User([...list_User, new_artist]);
    localStorage.setItem("list_User", JSON.stringify([...list_User]));
    setList_Artist([...list_User, new_artist].filter((item) => item.role === "artist"));
  };
  
  // xóa listener 
  const deleteListener = (id) => {
    const newList_User = list_User.filter((item) => item.id !== id);
    console.log(newList_User);
    localStorage.setItem("list_User", JSON.stringify(newList_User));
    setList_User(newList_User);
    setList_Listener(newList_User.filter((item) => item.role === "listener"));
  };

  // thêm listener
  const [newListenerEmail, setEmailListener] = useState("");
  const [newListenerRole, setRoleListener] = useState("");
  const [newListenerUsername, setUsernameListener] = useState("");
  const [newListenerPassword, setPasswordListener] = useState("");
const addListener = (e) => {
    e.preventDefault();
    const new_Listener = {
      username: newListenerUsername,
      email: newListenerEmail,
      password: newListenerPassword,
      role: newListenerRole,
      id: new Date(),
    };

    setList_User([...list_User, new_Listener]);
    localStorage.setItem("list_User", JSON.stringify([...list_User]));
    setList_Listener([...list_User, new_Listener].filter((item) => item.role === "listener"));
  };

  const showManageArtist = () => {
    displayManageArtist ? setDisplayArtist(false) : setDisplayArtist(true);
  };

  const showManageListener = () => {
    displayManageListener ? setDisplayListener(false) : setDisplayListener(true);
  }
  return (
    <div className="manage_container">
      {getRole === "admin" ? (
        <div>
        {/* ========= MANAGE ARTIST ============ */}
          <div className="d-flex gap-3 align-items-center header-manage" onClick={() => showManageArtist()}>
            <h2 style={{ marginBottom: 0 }}>Artist Manage</h2>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
          <div className="listArtistManaged" style={{ display: displayManageArtist ? "flex" : "none" }}>
            <table>
              <thead>
                <th>Email</th>
                <th>Role</th>
                <th>Username</th>
                <th>Password</th>
                <th>Delete</th>
              </thead>
              <tbody>
                {list_Artist.map((item, index) => (
                  <tr className="artist_list_item" key={index}>
                    <td className="artist_email">
                      <input className="artist_info" type="text" value={item.email} onChange={(e) => changeEmail(e.target.value, item.id)} />
                    </td>
                    <td className="artist_role">
                      <input className="artist_info" type="text" value={item.role} onChange={(e) => changeRole(e.target.value, item.id)} />
                    </td>
                    <td className="artist_username">
                      <input className="artist_info" type="text" value={item.username} onChange={(e) => changeUsername(e.target.value, item.id)} />
                    </td>
                    <td className="artist.email">
                      <input className="artist_info" type="text" value={item.password} onChange={(e) => changePassword(e.target.value, item.id)} />
                    </td>
                    <td>
                      <i className="fa-solid fa-circle-xmark" style={{ cursor: "pointer" }} onClick={() => deleteArtist(item.id)}></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="d-flex w-100 gap-5" style={{ marginBottom: "20px" }}>
              <input type="text" placeholder="Email:" value={newArtistEmail} onChange={(e) => setEmailArtist(e.target.value)} style={{ backgroundColor: "white", padding: "10px", borderRadius: "10px", outline: "none" }} />
              <input type="text" placeholder="Role:" value={newArtistRole} onChange={(e) => setRoleArtist(e.target.value)} style={{ backgroundColor: "white", padding: "10px", borderRadius: "10px", outline: "none" }} />
              <input type="text" placeholder="Username:" value={newArtistUsername} onChange={(e) => setUsernameArtist(e.target.value)} style={{ backgroundColor: "white", padding: "10px", borderRadius: "10px", outline: "none" }} />
              <input type="text" placeholder="Password:" value={newArtistPassword} onChange={(e) => setPasswordArtist(e.target.value)} style={{ backgroundColor: "white", padding: "10px", borderRadius: "10px", outline: "none" }} />
            </div>
            <button className="add_artist_button" onClick={(e) => addArtist(e)}>
              Add Artist
            </button>
          </div>

          {/* ========= MANAGE LISTENER ============ */}
          <div className="d-flex gap-3 align-items-center header-manage" onClick={() => showManageListener()}>
            <h2 style={{ marginBottom: 0 }}>Listener Manage</h2>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
          <div className="listArtistManaged" style={{ display: displayManageListener ? "flex" : "none" }}>
            <table>
              <thead>
                <th>Email</th>
                <th>Role</th>
                <th>Username</th>
                <th>Password</th>
                <th>Delete</th>
              </thead>
              <tbody>
                {list_Listener.map((item, index) => (
                  <tr className="artist_list_item" key={index}>
                    <td className="artist_email">
                      <input className="artist_info" type="text" value={item.email} onChange={(e) => changeEmail(e.target.value, item.id)} />
                    </td>
                    <td className="artist_role">
                      <input className="artist_info" type="text" value={item.role} onChange={(e) => changeRole(e.target.value, item.id)} />
                    </td>
                    <td className="artist_username">
                      <input className="artist_info" type="text" value={item.username} onChange={(e) => changeUsername(e.target.value, item.id)} />
                    </td>
                    <td className="artist.email">
                      <input className="artist_info" type="text" value={item.password} onChange={(e) => changePassword(e.target.value, item.id)} />
                    </td>
                    <td>
                      <i className="fa-solid fa-circle-xmark" style={{ cursor: "pointer" }} onClick={() => deleteListener(item.id)}></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="d-flex w-100 gap-5" style={{ marginBottom: "20px" }}>
              <input type="text" placeholder="Email:" value={newListenerEmail} onChange={(e) => setEmailListener(e.target.value)} style={{ backgroundColor: "white", padding: "10px", borderRadius: "10px", outline: "none" }} />
              <input type="text" placeholder="Role:" value={newListenerRole} onChange={(e) => setRoleListener(e.target.value)} style={{ backgroundColor: "white", padding: "10px", borderRadius: "10px", outline: "none" }} />
              <input type="text" placeholder="Username:" value={newListenerUsername} onChange={(e) => setUsernameListener(e.target.value)} style={{ backgroundColor: "white", padding: "10px", borderRadius: "10px", outline: "none" }} />
              <input type="text" placeholder="Password:" value={newListenerPassword} onChange={(e) => setPasswordListener(e.target.value)} style={{ backgroundColor: "white", padding: "10px", borderRadius: "10px", outline: "none" }} />
            </div>
            <button className="add_artist_button" onClick={(e) => addListener(e)}>
              Add Artist
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
