import { supabase } from '../lib/supabase'

// REGISTRO
export async function register(email, password, profileData) {
  const { data, error } = await supabase.auth.signUp({ email, password })
  
  if (error) return { error }

  const { error: profileError } = await supabase
    .from('profiles')
    .insert({
      id: data.user.id,
      full_name: profileData.fullName,
      phone: profileData.phone,
      neighborhood: profileData.neighborhood,
      role: profileData.role
    })

  return { data, error: profileError }
}

// LOGIN
export async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  return { data, error }
}

// CERRAR SESIÓN
export async function logout() {
  const { error } = await supabase.auth.signOut()
  return { error }
}

// OBTENER USUARIO ACTUAL
export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

// OBTENER PERFIL
export async function getProfile(userId) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()
  return { data, error }
}