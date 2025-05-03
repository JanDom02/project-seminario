// src/lib/services/presupuestos.ts
import { createClient } from '../../../utils/supabase/client';
import { Presupuesto } from '@/types';

const supabase = createClient();

export const presupuestosService = {
  // Obtener presupuestos por partido
  async getPresupuestosByPartido(partidoId: number): Promise<Presupuesto[]> {
    const { data, error } = await supabase
      .from('presupuestos')
      .select('*')
      .eq('id_partido', partidoId)
      .order('fecha', { ascending: false });
    
    if (error) {
      console.error('Error al obtener presupuestos:', error);
      throw error;
    }
    
    return data || [];
  },

  // Obtener presupuestos por candidato
  async getPresupuestosByCandidato(candidatoId: number): Promise<Presupuesto[]> {
    const { data, error } = await supabase
      .from('presupuestos')
      .select('*')
      .eq('id_candidato', candidatoId)
      .order('fecha', { ascending: false });
    
    if (error) {
      console.error('Error al obtener presupuestos:', error);
      throw error;
    }
    
    return data || [];
  },

  // Crear un nuevo presupuesto
  async createPresupuesto(presupuesto: Omit<Presupuesto, 'id_presupuesto'>): Promise<Presupuesto> {
    const { data, error } = await supabase
      .from('presupuestos')
      .insert([presupuesto])
      .select()
      .single();
    
    if (error) {
      console.error('Error al crear presupuesto:', error);
      throw error;
    }
    
    return data;
  },

  // Actualizar un presupuesto
  async updatePresupuesto(id: number, presupuesto: Partial<Presupuesto>): Promise<Presupuesto> {
    const { data, error } = await supabase
      .from('presupuestos')
      .update(presupuesto)
      .eq('id_presupuesto', id)
      .select()
      .single();
    
    if (error) {
      console.error('Error al actualizar presupuesto:', error);
      throw error;
    }
    
    return data;
  },

  // Eliminar un presupuesto
  async deletePresupuesto(id: number): Promise<void> {
    const { error } = await supabase
      .from('presupuestos')
      .delete()
      .eq('id_presupuesto', id);
    
    if (error) {
      console.error('Error al eliminar presupuesto:', error);
      throw error;
    }
  },

  // Obtener un presupuesto por ID
  async getPresupuestoById(id: number): Promise<Presupuesto | null> {
    const { data, error } = await supabase
      .from('presupuestos')
      .select('*')
      .eq('id_presupuesto', id)
      .single();
    
    if (error) {
      console.error('Error al obtener presupuesto:', error);
      return null;
    }
    
    return data;
  }
};