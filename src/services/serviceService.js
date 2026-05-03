import { supabase } from '../lib/supabase'

// OBTENER TODOS LOS SERVICIOS
export async function getServices(categoryId = null) {
  let query = supabase
    .from('services')
    .select(`
      *,
      profiles (full_name, neighborhood),
      categories (name, icon)
    `)
    .eq('is_active', true)
    .order('created_at', { ascending: false })

  if (categoryId) {
    query = query.eq('category_id', categoryId)
  }

  const { data, error } = await query
  return { data, error }
}

// OBTENER UN SERVICIO POR ID
export async function getServiceById(id) {
  const { data, error } = await supabase
    .from('services')
    .select(`
      *,
      profiles (full_name, neighborhood, phone),
      categories (name, icon)
    `)
    .eq('id', id)
    .single()
  return { data, error }
}

// OBTENER SERVICIOS DEL EMPRENDEDOR
export async function getMyServices(userId) {
  const { data, error } = await supabase
    .from('services')
    .select('*, categories (name, icon)')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
  return { data, error }
}

// CREAR SERVICIO
export async function createService(serviceData) {
  const { data: { user } } = await supabase.auth.getUser()
  
  const { data, error } = await supabase
    .from('services')
    .insert({
      user_id: user.id,
      title: serviceData.title,
      description: serviceData.description,
      category_id: serviceData.categoryId,
      price_from: serviceData.priceFrom,
      contact_phone: serviceData.contactPhone
    })
    .select()
  return { data, error }
}

// EDITAR SERVICIO
export async function updateService(id, serviceData) {
  const { data, error } = await supabase
    .from('services')
    .update({
      title: serviceData.title,
      description: serviceData.description,
      category_id: serviceData.categoryId,
      price_from: serviceData.priceFrom,
      contact_phone: serviceData.contactPhone
    })
    .eq('id', id)
    .select()
  return { data, error }
}

// ELIMINAR SERVICIO
export async function deleteService(id) {
  const { error } = await supabase
    .from('services')
    .delete()
    .eq('id', id)
  return { error }
}

// OBTENER CATEGORÍAS
export async function getCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('id')
  return { data, error }
}