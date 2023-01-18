npmexport type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      movies: {
        Row: {
          id: string
          image_url: string | null
          movie_id: number | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          id?: string
          image_url?: string | null
          movie_id?: number | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          id?: string
          image_url?: string | null
          movie_id?: number | null
          title?: string | null
          user_id?: string | null
        }
      }
      profiles: {
        Row: {
          id: string
          updated_at: string | null
          username: string | null
        }
        Insert: {
          id: string
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          id?: string
          updated_at?: string | null
          username?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
