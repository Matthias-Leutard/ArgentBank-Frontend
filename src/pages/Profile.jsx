import { useState, useEffect } from 'react'
import {
  getUserProfile,
  updateUserProfile,
} from '../services/authService'

function Profile() {
  const [user, setUser] = useState(null)
  const [error, setError] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [newUserName, setNewUserName] = useState('')

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile()
        setUser(data.body)
      } catch (error) {
        setError(error.message)
      }
    }

    fetchProfile()
  }, [])

  const handleUpdateUserName = async (event) => {
    event.preventDefault()
    setError('')

    try {
      const data = await updateUserProfile(newUserName)
      setUser(data.body)
      setIsEditing(false)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <main className="main">
      {error && <p>{error}</p>}

      {!user && !error && <p>Chargement du profil...</p>}

      {user && (
        <>
          <h1>
            Welcome back
            <br />
            {user.firstName} {user.lastName}!
          </h1>

          {isEditing ? (
            <form
              className="edit-profile-form"
              onSubmit={handleUpdateUserName}
            >
              <input
                type="text"
                value={newUserName}
                onChange={(event) =>
                  setNewUserName(event.target.value)
                }
                placeholder="New username"
                required
              />

              <div className="edit-profile-buttons">
                <button type="submit" className="edit-button">
                  Save
                </button>

                <button
                  type="button"
                  className="cancel-button"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              <p>Username : {user.userName}</p>

              <button
                className="edit-button"
                onClick={() => {
                  setNewUserName(user.userName)
                  setIsEditing(true)
                }}
              >
                Edit Name
              </button>
            </>
          )}
        </>
      )}
    </main>
  )
}

export default Profile