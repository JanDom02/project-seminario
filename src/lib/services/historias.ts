// src/lib/services/historias.ts
import { createClient } from '../../../utils/supabase/client';
import { Historia } from '@/types';

const supabase = createClient();

export const historiasService = {
  // Obtener historia de un partido
  async getHistoriaByPartido(partidoId: number): Promise<Historia | null> {
    const { data, error } = await supabase
      .from('historias')
      .select('*')
      .eq('id_partido', partidoId)
      .maybeSingle();
    
    if (error) {
      console.error('Error al obtener historia del partido:', error);
      throw error;
    }
    
    return data;
  },

  // Obtener historia de un candidato
  async getHistoriaByCandidato(candidatoId: number): Promise<Historia | null> {
    const { data, error } = await supabase
      .from('historias')
      .select('*')
      .eq('id_candidato', candidatoId)
      .maybeSingle();
    
    if (error) {
      console.error('Error al obtener historia del candidato:', error);
      throw error;
    }
    
    return data;
  },

  // Crear o actualizar historia para un partido
  async upsertHistoriaPartido(partidoId: number, descripcion: string): Promise<Historia> {
    // Primero verificamos si ya existe
    const existente = await this.getHistoriaByPartido(partidoId);
    
    if (existente) {
      // Actualizar
      const { data, error } = await supabase
        .from('historias')
        .update({ descripcion })
        .eq('id_historia', existente.id_historia)
        .select()
        .single();
      
      if (error) {
        console.error('Error al actualizar historia:', error);
        throw error;
      }
      
      return data;
    } else {
      // Crear nueva
      const { data, error } = await supabase
        .from('historias')
        .insert([{ descripcion, id_partido: partidoId }])
        .select()
        .single();
      
      if (error) {
        console.error('Error al crear historia:', error);
        throw error;
      }
      
      return data;
    }
  },

  // Crear o actualizar historia para un candidato
  async upsertHistoriaCandidato(candidatoId: number, partidoId: number, descripcion: string): Promise<Historia> {
    // Primero verificamos si ya existe
    const existente = await this.getHistoriaByCandidato(candidatoId);
    
    if (existente) {
      // Actualizar
      const { data, error } = await supabase
        .from('historias')
        .update({ descripcion })
        .eq('id_historia', existente.id_historia)
        .select()
        .single();
      
      if (error) {
        console.error('Error al actualizar historia:', error);
        throw error;
      }
      
      return data;
    } else {
      // Crear nueva
      const { data, error } = await supabase
        .from('historias')
        .insert([{ descripcion, id_partido: partidoId, id_candidato: candidatoId }])
        .select()
        .single();
      
      if (error) {
        console.error('Error al crear historia:', error);
        throw error;
      }
      
      return data;
    }
  },

  // Eliminar historia
  async deleteHistoria(id: number): Promise<void> {
    const { error } = await supabase
      .from('historias')
      .delete()
      .eq('id_historia', id);
    
    if (error) {
      console.error('Error al eliminar historia:', error);
      throw error;
    }
  }
};