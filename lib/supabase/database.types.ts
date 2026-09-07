export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type AccommodationType =
  | "private"
  | "shared_2"
  | "shared_3"
  | "dorm"
  | "not_applicable";

export type OfferingType =
  | "yttc"
  | "short_course"
  | "retreat"
  | "ayurveda_retreat"
  | "online_course"
  | "program";

export type Database = {
  public: {
    Tables: {
      offerings: {
        Row: {
          id: string;
          slug: string;
          name: string;
          type: OfferingType;
          description: string | null;
          is_active: boolean;
        };
        Insert: {
          id?: string;
          slug: string;
          name: string;
          type: OfferingType;
          description?: string | null;
          is_active?: boolean;
        };
        Update: {
          id?: string;
          slug?: string;
          name?: string;
          type?: OfferingType;
          description?: string | null;
          is_active?: boolean;
        };
        Relationships: [];
      };
      offering_pricing: {
        Row: {
          id: string;
          offering_id: string;
          accommodation_type: AccommodationType;
          duration_label: string;
          price: number;
          currency: string;
          deposit_percent: number | null;
        };
        Insert: {
          id?: string;
          offering_id: string;
          accommodation_type: AccommodationType;
          duration_label: string;
          price: number;
          currency: string;
          deposit_percent?: number | null;
        };
        Update: {
          id?: string;
          offering_id?: string;
          accommodation_type?: AccommodationType;
          duration_label?: string;
          price?: number;
          currency?: string;
          deposit_percent?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "offering_pricing_offering_id_fkey";
            columns: ["offering_id"];
            isOneToOne: false;
            referencedRelation: "offerings";
            referencedColumns: ["id"];
          },
        ];
      };
      cohorts: {
        Row: {
          id: string;
          offering_id: string;
          start_date: string;
          end_date: string | null;
          is_open_for_booking: boolean;
          capacity: number | null;
        };
        Insert: {
          id?: string;
          offering_id: string;
          start_date: string;
          end_date?: string | null;
          is_open_for_booking?: boolean;
          capacity?: number | null;
        };
        Update: {
          id?: string;
          offering_id?: string;
          start_date?: string;
          end_date?: string | null;
          is_open_for_booking?: boolean;
          capacity?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "cohorts_offering_id_fkey";
            columns: ["offering_id"];
            isOneToOne: false;
            referencedRelation: "offerings";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

export type OfferingsRow = Database["public"]["Tables"]["offerings"]["Row"];
export type OfferingPricingRow =
  Database["public"]["Tables"]["offering_pricing"]["Row"];
export type CohortRow = Database["public"]["Tables"]["cohorts"]["Row"];

export type OfferingsWithPricing = OfferingsRow & {
  offering_pricing: OfferingPricingRow[] | null;
};
