import {google} from "calendar-link";

import Head from "../src/components/Head";
import resolvePath from "../src/utils/resolvePath";
import {defaultLocale, t} from "../src/i18n";


const appConfig = {
  weddingDay: "Monday",
  weddingTime: "12.30",
  weddingDate: "May 20, 2024",
  showBuiltWithInfo: true,
  calendarInfo: {
    timeStartISO: "2024-05-20T12:30:00+01:00",
    timeEndISO: "2024-05-20T13:30:00+01:00"
  },
  coupleInfo: {
    brideName: "Lyndsey",
    groomName: "Robert",
    coupleNameFormat: "GROOM_FIRST"
  },
  venue: {
    name: "Cabra Castle",
    addressLine1: "Carrickmacross Road",
    addressLine2: "Cormey, Kingscourt",
    city: "Co. Cavan",
    country: "Ireland",
    mapUrl: "https://goo.gl/maps/iw9aHBV68n2ePUEg9"
  },
  church: {
    name: "St Oliver Plunkett's Church",
    addressLine1: "Sea Road, Haggardstown",
    addressLine2: "Blackrock",
    city: "Co. Dundalk",
    country: "Ireland",
    mapUrl: "https://goo.gl/maps/Zy9o9cXcQyu31PYD9"
  },
  logo: {
    headerLogo: "/assets/images/ring-svg.png",
    footerLogo: "/assets/video/aw-ring-logo-ticker.mp4",
    footerLogoType: "mp4"
  },
};


const ShowInvite = ({currentUrl, guestListLastUpdatedAt}) => {
  const {logo, coupleInfo, venue, weddingDay, weddingDate, weddingTime, calendarInfo, church} = appConfig
  const {brideName, groomName, coupleNameFormat} = coupleInfo

  const coupleNameStr = coupleNameFormat === 'GROOM_FIRST'
    ? `${groomName} & ${brideName}`
    : `${brideName} & ${groomName}`
  const coupleName = coupleNameFormat === 'GROOM_FIRST'
    ? (<>{groomName} <span>&amp;</span> {brideName}</>)
    : (<>{brideName} <span>&amp;</span> {groomName}</>)

  // Venue info
  const venueBrief = `${church.name}, ${church.city}, ${church.country}`
  const weddingDateBrief = `${weddingDay}, ${weddingDate}`

  // Event info
  const eventTitle = `${coupleNameStr}'s Wedding`
  let eventDescription = `${weddingDateBrief} at ${church.name}, ${church.addressLine2}`

  // Calendar payload
  const calendarEvent = {
    title: eventTitle,
    description: eventDescription,
    location: 'St Oliver Plunkett\'s Church Blackrock',
    start: calendarInfo.timeStartISO,
    end: calendarInfo.timeEndISO
  }

  function AddToCalendar() {
    window.open(google(calendarEvent), '_blank', 'noreferrer')
  }


  return (
    <div>
      <Head
        title={eventTitle}
        description={eventDescription}
        guestName={""}
        url={currentUrl}
        date={weddingDateBrief}
        modifiedTime={guestListLastUpdatedAt}
        venue={venueBrief}
        author={resolvePath('/')}
      />
      <section className="header_area">
        <div
          id="home"
          className="header_slider"
        >
          <div className="slick-list draggable">
            <div className="slick-track" style={{opacity: 1}}>
              <div
                className="single_slider bg_cover d-flex align-items-center"
                style={{
                  height: '100vh',
                  color: 'white'
                }}
              >
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-12">
                      <div className="slider_content text-center" style={{paddingTop: 0}}>
                        <img style={{maxHeight: 60, margin: 25, marginTop: 0}} src={logo.headerLogo} alt="logo"/>
                        <h5
                          className="slider_sub_title"
                          data-animation="fadeInUp"
                          data-delay="0.2s"
                          style={{animationDelay: '0.2s'}}
                        >{t('siteIntro')}</h5>
                        <h2
                          className="slider_title"
                          data-animation="fadeInUp"
                          data-delay="0.7s"
                          style={{animationDelay: '0.7s'}}
                        >
                          {coupleName}
                        </h2>
                        <span
                          className="location"
                          data-animation="fadeInUp"
                          data-delay="1s"
                          style={{animationDelay: '1s'}}
                        >{church.name}, {church.addressLine2}, {church.country}
                          <br/>
                          {venue.name}, {venue.addressLine2}, {venue.country}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="coming_soon" className="coming_soon_area pt-20 pb-70">
        <div className="coming_soon_shape_1" style={{zIndex: 1}}>
          <img src="/assets/images/shape-1.png" alt="shape"/>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div
                className="section_title pt-50 wow fadeIn"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
                style={{
                  visibility: 'visible',
                  animationDuration: '1.3s',
                  animationDelay: '0.2s',
                  animationName: 'fadeIn'
                }}
              >
                <h3 className="title">{t("eventDate")}:</h3>
                <p>{weddingDateBrief}</p>
                <div style={{
                  paddingTop: '0.2rem',
                  paddingBottom: '0.2rem',
                }}>
                  <button style={{marginLeft: -12}} className={"btn"} onClick={AddToCalendar}>Add to Calendar</button>
                </div>
                <img src="/assets/images/section_shape.png" alt="Shape"/>
              </div>
            </div>
            <div className="col-lg-8">
              <div
                className="wow fadeIn"
                data-wow-duration="1.3s"
                data-wow-delay="0.6s"
                style={{
                  visibility: 'visible',
                  animationDuration: '1.3s',
                  animationDelay: '0.6s',
                  animationName: 'fadeIn'
                }}
              >
                <div className="coming_soon_count d-flex justify-content-end pt-20">
                  <div
                    style={{marginRight: 20, width: 360, height: 138, backgroundColor: 'transparent'}}
                    className="single_count d-flex align-items-center justify-content-center mt-30"
                  >
                    <div className="count_content" style={{zIndex: 1, paddingTop: 20}}>
                      <a href={venue.mapUrl}>
                        <img style={{borderRadius: 5}} src="/assets/images/church.png"
                             alt="St Oliver Plunkett's Church"/>
                      </a>
                      <a href={church.mapUrl} style={{
                        maxWidth: '75vw',
                        overflowX: 'hidden',
                        textOverflow: 'ellipsis',
                        marginTop: 10,
                      }}>
                        {church.mapUrl}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="coming_soon_shape_2">
          <img src="/assets/images/shape-2.png" alt="shape"/>
        </div>
      </section>

      <section id="contact" className="contact_area">
        <div className="container">
          <div
            className="contact_wrapper wow fadeInUpBig"
            data-wow-duration="1.3s"
            data-wow-delay="0.4s"
            style={{
              paddingBottom: 30,
              boxShadow: 'none',
              visibility: 'visible',
              animationDuration: '1.3s',
              animationDelay: '0.4s',
              animationName: 'fadeInUp'
            }}
          >
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="section_title text-center pb-30">
                  <h3 className="title">{t('invitationIntro')}</h3>
                  <div style={{
                    textAlign: 'left',
                    paddingTop: 20,
                    paddingBottom: 20,
                    maxWidth: 400,
                    margin: 'auto',
                  }}>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: 'inherit',
                      color: 'dimgrey',
                      textAlign: t('invitationContentTextAlign')
                    }}>
                      <i>
                        {t('invitationContent')}
                        {t('invitationOutro') && !t('invitationOutro').startsWith("[missing") && (
                          <>
                            <br/>
                            <br/>
                            {t('invitationOutro')}
                          </>
                        )}
                      </i>
                    </p>
                  </div>
                  <div className={'row'} style={{justifyContent: 'space-evenly'}}>
                    <div style={{marginRight: 0}}>
                      <p className="text">
                        <a href={church.mapUrl}
                           style={{
                             borderBottom: '0.2rem solid',
                             marginBottom: 10,
                           }}><b>{church.name}</b></a>
                        <br/>{church.addressLine1}
                        <br/>{church.addressLine2}
                        <br/>{church.country}
                      </p>
                      <p className="text" style={{marginTop: 10}}>
                        <b>{weddingDate} · {weddingTime}</b>
                      </p>
                    </div>
                    <div style={{marginLeft: 0}}>
                      <p className="text">
                        <a href={venue.mapUrl}
                           style={{
                             borderBottom: '0.2rem solid',
                             marginBottom: 10,
                           }}><b>{venue.name}</b></a>
                        <br/>{venue.addressLine1}
                        <br/>{venue.addressLine2}
                        <br/>{venue.country}
                      </p>
                      <p className="text" style={{marginTop: 10}}>
                        <b>Reception to follow</b>
                      </p>
                    </div>
                  </div>

                  {t('invitationClosing') && !t('invitationClosing').startsWith("[missing") &&
                    <p className="text" style={{
                      fontStyle: "italic",
                      maxWidth: 420,
                      margin: 'auto',
                      marginTop: 60,
                    }}
                       dangerouslySetInnerHTML={{__html: t('invitationClosing')}}>
                    </p>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer section */}
      <footer id="footer" className="footer_area">
        <div className="footer_shape_1">
          <img src="/assets/images/shape-1.png" alt="shape"/>
        </div>
        <div className="container">
          <div className="footer_widget pt-50 pb-10 text-center">
            <div className="footer_title">
              <h3 className="title">
                {coupleName}
              </h3>
              <p className="text" style={{marginTop: 10}}>
                <b>#OneMooreMetcalfe</b>
              </p>
            </div>
          </div>
        </div>
        <div style={{
          textAlign: 'center',
          marginBottom: 40,
        }}>
        </div>
      </footer>
    </div>
  )
};

ShowInvite.getInitialProps = (ctx) => {
  const localeParams = ctx.query.lang || defaultLocale
  const emptyGuestParams = {
    guest: {
      guestId: '',
      name: '',
      greeting: '',
      locale: localeParams,
    }
  }

  const currentUrl = resolvePath(ctx.req.url)
  const guestId = ctx.query.u
  if (!guestId) {
    return {
      currentUrl,
      ...emptyGuestParams
    }
  }

}

export default ShowInvite