const API_URL = 'http://localhost:3001/api/v1'

export async function loginUser(email, password) {
  const response = await fetch(`${API_URL}/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Erreur lors de la connexion')
  }

  return data
}

export async function getUserProfile() {
  const token = localStorage.getItem('token')

  const response = await fetch(`${API_URL}/user/profile`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(
      data.message || 'Erreur lors de la récupération du profil'
    )
  }

  return data
}

export async function updateUserProfile(userName) {
  const token = localStorage.getItem('token')

  const response = await fetch(`${API_URL}/user/profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      userName,
    }),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(
      data.message || 'Erreur lors de la modification du profil'
    )
  }

  return data
}