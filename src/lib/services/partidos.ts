// src/lib/services/partidos.ts
import { createClient } from '../../../utils/supabase/client';
import { Partido } from '@/types';

const supabase = createClient();

export const partidosService = {
  // Obtener todos los partidos
  async getAllPartidos(): Promise<Partido[]> {
    const { data, error } = await supabase
      .from('partidos')
      .select('*')
      .order('nombre_partido');
    
    if (error) {
      console.error('Error al obtener partidos:', error);
      throw error;
    }
    
    return data || [];
  },

  // Obtener un partido por ID
  async getPartidoById(id: number): Promise<Partido | null> {
    const { data, error } = await supabase
      .from('partidos')
      .select('*')
      .eq('id_partido', id)
      .single();
    
    if (error) {
      console.error('Error al obtener partido:', error);
      return null;
    }
    
    return data;
  },

  // Obtener partido por slug (nombre formateado para URL)
  async getPartidoBySlug(slug: string): Promise<Partido | null> {
    // Convertimos el slug a un posible nombre de partido
    const nombrePartido = slug.replace(/-/g, ' ');
    
    const { data, error } = await supabase
      .from('partidos')
      .select('*')
      .ilike('nombre_partido', nombrePartido)
      .single();
    
    if (error) {
      console.error('Error al obtener partido por slug:', error);
      return null;
    }
    
    return data;
  },

  // Crear un nuevo partido
  async createPartido(partido: Omit<Partido, 'id_partido'>): Promise<Partido> {
    const { data, error } = await supabase
      .from('partidos')
      .insert([partido])
      .select()
      .single();
    
    if (error) {
      console.error('Error al crear partido:', error);
      throw error;
    }
    
    return data;
  },

  // Actualizar un partido
  async updatePartido(id: number, partido: Partial<Partido>): Promise<Partido> {
    const { data, error } = await supabase
      .from('partidos')
      .update(partido)
      .eq('id_partido', id)
      .select()
      .single();
    
    if (error) {
      console.error('Error al actualizar partido:', error);
      throw error;
    }
    
    return data;
  },

  // Eliminar un partido
  async deletePartido(id: number): Promise<void> {
    const { error } = await supabase
      .from('partidos')
      .delete()
      .eq('id_partido', id);
    
    if (error) {
      console.error('Error al eliminar partido:', error);
      throw error;
    }
  },

  // Obtener partidos por usuario
  async getPartidosByUsuario(userId: string): Promise<Partido[]> {
    const { data, error } = await supabase
      .from('profiles')
      .select('id_partido')
      .eq('id', userId);
    
    if (error || !data.length) {
      console.error('Error al obtener partidos del usuario:', error);
      return [];
    }
    
    const partidoIds = data.map(profile => profile.id_partido);
    
    const { data: partidos, error: partidosError } = await supabase
      .from('partidos')
      .select('*')
      .in('id_partido', partidoIds);
    
    if (partidosError) {
      console.error('Error al obtener partidos:', partidosError);
      return [];
    }
    
    return partidos || [];
  }
};