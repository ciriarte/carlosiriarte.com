
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('resume', { 
  	fullname: __('Carlos Iriarte'),
    description: __('Technical Architect &amp; Technology Dissident'),
  	current_position: __('Lead Architect'),
    telephone: __('+1 (310) 990-7882'),
    streetAddress: __('409 S Fuller Ave.'),
    addressLocality: __('Los Angeles'),
    addressRegion: __('California'),
    addressCountry: __('U.S.A.'),
    postalCode: __('90036'),
    follow_twitter: __('Follow me on Twitter'),
    about_me_title: __('about_me_title'),
    summary: __('summary'),
    specialties_title: __('specialties_title'),
    specialties: __('specialties'),
    skills: __('Skills'),
    experience_title: __('experience_title'),
    education_title: __('education_title'),
    february: __('february'),
    september: __('September'),
    october: __('October'),
    august: __('August'),
    present: __('Present'),
    march: __('March'),
    november: __('November'),
    december: __('December'),
    itesm_job_description: __('itesm_job_description'),
    dial800_job_description: __('dial800_job_description'),
    neoris_job_description: __('neoris_job_description'),
    tesis_job_description: __('tesis_job_description'),
    volkswagen_job_description: __('volkswagen_job_description'),
    major: __('Mechatronics Engineering, B.Sc.'),
    csharp_tooltip: __('csharp_tooltip'),
    javascript_tooltip: __('javascript_tooltip'),
    python_tooltip: __('python_tooltip'),
    vim_tooltip: __('vim_tooltip'),
    git_tooltip: __('git_tooltip'),
    vs_studio_tooltip: __('vs_studio_tooltip'),
    nodejs_tooltip: __('nodejs_tooltip')
  });
};
