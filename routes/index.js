
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('resume', { 
  	fullname: __('Carlos Iriarte'),
    description: __('Technical Architect &amp; Technology Dissident'),
  	current_position: __('Lead Architect @ Dial800'),
    telephone: __('+1 (310) 990-7882'),
    streetAddress: __('409 S Fuller Ave.'),
    addressLocality: __('Los Angeles'),
    addressRegion: __('California'),
    addressCountry: __('U.S.A.'),
    postalCode: __('90036'),
    follow_twitter: __('Follow me on Twitter'),
    profile: __('Profile'),
    summary: __('summary'),
    specialties: __('specialties'),
    skills: __('Skills'),
    experience: __('Experience'),
    september: __('September'),
    october: __('October'),
    august: __('August'),
    present: __('Present'),
    march: __('March'),
    november: __('November'),
    december: __('December'),
    itesm_job_description: __('itesm_job_description'),
    dial800_job_description: __('dial800_job_description'),
    tesis_job_description: __('tesis_job_description'),
    volkswagen_job_description: __('volkswagen_job_description')
  });
};