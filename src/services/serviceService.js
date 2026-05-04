import { supabase } from "../lib/supabase";

// 🔥 GET TODOS LOS SERVICIOS
export async function getServices() {
  const { data, error } = await supabase
    .from("services")
    .select(`
      id,
      title,
      description,
      price_from,
      contact_phone,
      user_id,
      category_id,
      categories (name, icon)
    `)
    .order("created_at", { ascending: false });

  return { data, error };
}

// 🔥 GET POR ID
export async function getServiceById(id) {
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("id", id)
    .single();

  return { data, error };
}

// 🔥 CREAR
export async function createService(serviceData) {
  const { data: { user } } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("services")
    .insert({
      user_id: user.id,
      title: serviceData.title,
      description: serviceData.description,
      category_id: serviceData.categoryId,
      price_from: serviceData.priceFrom,
      contact_phone: serviceData.contactPhone
    })
    .select();

  return { data, error };
}

// 🔥 UPDATE
export async function updateService(id, serviceData) {
  const { data: { user } } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("services")
    .update({
      title: serviceData.title,
      description: serviceData.description,
      price_from: serviceData.priceFrom,
      contact_phone: serviceData.contactPhone
    })
    .eq("id", id)
    .eq("user_id", user.id)
    .select();

  return { data, error };
}

// 🔥 DELETE
export async function deleteService(id) {
  const { error } = await supabase
    .from("services")
    .delete()
    .eq("id", id);

  return { error };
}

// 🔥 CATEGORÍAS
export async function getCategories() {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("id");

  return { data, error };
}