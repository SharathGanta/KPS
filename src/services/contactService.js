const endpoint = import.meta.env.VITE_CONTACT_API_URL?.trim()

/**
 * Sends an inquiry to the configured backend endpoint.
 * If no endpoint is configured, the form stays usable in demo mode and
 * reports that no message was sent. Connect a secure backend before launch.
 */
export async function contactService(form) {
  if (!endpoint) {
    console.info('KPS inquiry (demo mode):', { ...form, submittedAt: new Date().toISOString() })
    return {
      demo: true,
      message: 'The form is validated, but no message was sent because VITE_CONTACT_API_URL is not configured. Please connect a backend endpoint before launch.',
    }
  }

  let response
  try {
    response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...form, submittedAt: new Date().toISOString(), source: 'kps-website' }),
    })
  } catch {
    throw new Error('Unable to connect right now. Please check your connection or contact us directly.')
  }

  if (!response.ok) {
    throw new Error(`We couldn't submit your enquiry (HTTP ${response.status}). Please try again later.`)
  }
  return { demo: false, message: 'Thank you! Your enquiry has been submitted. Our team will contact you soon.' }
}
