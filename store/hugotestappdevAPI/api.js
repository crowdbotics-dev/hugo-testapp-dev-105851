import axios from "axios"
const hugotestappdevAPI = axios.create({
  baseURL: "https://hugo-testapp-dev-105851.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return hugotestappdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return hugotestappdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return hugotestappdevAPI.post(`/api/v1/signup/`, payload)
}
function modules_hubspot_service_access_token_create(payload) {
  return hugotestappdevAPI.post(`/modules/hubspot/service/access/token/`)
}
function modules_hubspot_service_contact_deals_list_retrieve(payload) {
  return hugotestappdevAPI.get(`/modules/hubspot/service/contact/deals/list/`)
}
function modules_hubspot_service_deals_associations_create_create(payload) {
  return hugotestappdevAPI.post(
    `/modules/hubspot/service/deals/associations/create/`
  )
}
function modules_hubspot_service_deals_create_create(payload) {
  return hugotestappdevAPI.post(`/modules/hubspot/service/deals/create/`)
}
function modules_hubspot_service_deals_list_retrieve(payload) {
  return hugotestappdevAPI.get(`/modules/hubspot/service/deals/list/`)
}
function modules_hubspot_service_deals_remove_destroy(payload) {
  return hugotestappdevAPI.delete(`/modules/hubspot/service/deals/remove/`)
}
function modules_hubspot_service_deals_single_retrieve(payload) {
  return hugotestappdevAPI.get(`/modules/hubspot/service/deals/single/`)
}
function modules_hubspot_service_events_create_create(payload) {
  return hugotestappdevAPI.post(`/modules/hubspot/service/events/create/`)
}
function modules_hubspot_service_meeting_contacts_list_retrieve(payload) {
  return hugotestappdevAPI.get(
    `/modules/hubspot/service/meeting/contacts/list/`
  )
}
function modules_hubspot_service_ticket_associations_create_update(payload) {
  return hugotestappdevAPI.put(
    `/modules/hubspot/service/ticket/associations/create/`
  )
}
function modules_hubspot_service_ticket_associations_list_retrieve(payload) {
  return hugotestappdevAPI.get(
    `/modules/hubspot/service/ticket/associations/list/`
  )
}
function modules_hubspot_service_tickets_create_create(payload) {
  return hugotestappdevAPI.post(`/modules/hubspot/service/tickets/create/`)
}
function modules_hubspot_service_tickets_list_retrieve(payload) {
  return hugotestappdevAPI.get(`/modules/hubspot/service/tickets/list/`)
}
function modules_hubspot_service_tickets_remove_destroy(payload) {
  return hugotestappdevAPI.delete(`/modules/hubspot/service/tickets/remove/`)
}
function modules_hubspot_service_tickets_single_retrieve(payload) {
  return hugotestappdevAPI.get(`/modules/hubspot/service/tickets/single/`)
}
function modules_hubspot_service_webhook_create(payload) {
  return hugotestappdevAPI.post(`/modules/hubspot/service/webhook/`)
}
function rest_auth_login_create(payload) {
  return hugotestappdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return hugotestappdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return hugotestappdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return hugotestappdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return hugotestappdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return hugotestappdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return hugotestappdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return hugotestappdevAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
function rest_auth_user_retrieve(payload) {
  return hugotestappdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return hugotestappdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return hugotestappdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  modules_hubspot_service_access_token_create,
  modules_hubspot_service_contact_deals_list_retrieve,
  modules_hubspot_service_deals_associations_create_create,
  modules_hubspot_service_deals_create_create,
  modules_hubspot_service_deals_list_retrieve,
  modules_hubspot_service_deals_remove_destroy,
  modules_hubspot_service_deals_single_retrieve,
  modules_hubspot_service_events_create_create,
  modules_hubspot_service_meeting_contacts_list_retrieve,
  modules_hubspot_service_ticket_associations_create_update,
  modules_hubspot_service_ticket_associations_list_retrieve,
  modules_hubspot_service_tickets_create_create,
  modules_hubspot_service_tickets_list_retrieve,
  modules_hubspot_service_tickets_remove_destroy,
  modules_hubspot_service_tickets_single_retrieve,
  modules_hubspot_service_webhook_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
