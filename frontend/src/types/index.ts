export interface Contract {
  id: string
  name: string
  vendor: string
  type: 'MSA' | 'SOW'
  effective_date: string
  ending_date: string
  contact_name: string
  contact_email: string
  s3_key: string
  share_token: string
  created_by: string
  created_at: string
  updated_at: string
}

export interface User {
  okta_sub: string
  email: string
  name: string
  role: 'admin' | 'viewer'
  last_login: string
  created_at: string
}
