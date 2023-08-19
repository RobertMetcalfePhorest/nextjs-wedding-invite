import {google} from "calendar-link";

import Head from "../src/components/Head";
import resolvePath from "../src/utils/resolvePath";
import {defaultLocale, t} from "../src/i18n";
import {useSnapCarousel} from "react-snap-carousel";


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

  const { scrollRef } = useSnapCarousel()


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
                      <a href={church.mapUrl}>
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
            <div className="">
              <div className="">
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
              <div className="section_title text-center pb-30 pb" style={{marginTop: 50}}>
                <h3 className="title">{t('frequentlyAskedQs')}</h3>
                <ul
                    ref={scrollRef}
                    style={{
                      display: 'flex',
                      overflow: 'auto',
                      scrollSnapType: 'x mandatory',
                    }}
                >
                  {FAQ.map(({title, description}, i) => (
                      <li
                          style={{
                            width: '400px',
                            height: '500px',
                            flexShrink: 0,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 20,
                            marginRight: 20,
                            flexDirection: 'column'
                          }}
                      >
                        <h3>{title}</h3>
                        <p className="text">{description}</p>
                      </li>
                  ))}
                </ul>
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


const FAQ = [
  {title: '1. What time should I arrive to the ceremony?', description: 'Our ceremony is scheduled to begin at 12:30 PM, sharp. Guests should aim to arrive between 12 and 12:15 in order to have enough time to park and find their seats. Please enter the church through the red doors at the front, not the side doors nearest the parking lot.'},
  {title: '2. What is the dress code?', description: 'We are having a black tie wedding. Gentlemen should wear tuxedos, and ladies should wear long dresses. Hats are not required.'},
  {title: '3. Will the ceremony, cocktail hour, and reception take place indoors or outdoors?', description: 'Our ceremony will take place indoors. Our cocktail hour will take place indoors, with an option to enjoy refreshments outside on a covered patio. Our reception dinner will take place indoors, and all dancing will take place indoors.'},
  {title: '4. What will the weather be like?', description: 'While we can’t predict the weather, May is notoriously pleasant in Ireland. Weather ranges between 16 °C (55 °F) and 20 °C (72 °F), and while there is a higher chance than usual for sunny skies, rain is always likely in Ireland. Guests should come prepared with a light shawl or outer layer.'},
  {title: '5. What will your wedding day timeline look like?', description: 'We are having a traditional Catholic wedding mass, which takes approximately 1 hour. We expect the ceremony to be finished at 1:30, followed by a receiving line. Cocktail hour will start immediately after at Cabra Castle, and we will be ringing the bell for dinner at 5:30. Dancing will end at 2 AM, with the opportunity for an after party lasting into the small hours of the morning.'},
  {title: '6. How do I get to the wedding venue?', description: 'We recommend all guests download Ireland on Google Maps for offline access, as cell reception can be spotty. Google Maps links can be found in the details section, above. Our ceremony venue is the Church of St. Oliver Plunkett, located on Sea Road in Blackrock, Co. Louth. Our ceremony venue is Cabra Castle, in Kingscourt, Co. Cavan, approximately 45 minutes from the Church.'},
  {title: '7. Will transportation be provided?', description: 'We will not be providing transportation, so guests should plan to drive their own cars to the church and to the reception venue.'},
  {title: '8. Is there parking available at the wedding venue?', description: 'There is free parking available at both the church and the reception venue.'},
  {title: '9. Can I bring my kids?', description: 'While we wish we could accommodate all children, we kindly ask that only children named on the invitations attend our wedding due to space constraints.'},
  {title: '10. What type of food and drink will be served during the cocktail hour and reception?', description: 'We will be serving canapés, and champagne and beer will be available during the cocktail hour. Soft drinks will also be available. Dinner is a 5-course plated meal, followed by wedding cake. We will also have a late-night dinner served around 11 PM.'},
  {title: '11. I have dietary restrictions/allergies. What\'s the best way to let you know?', description: 'If you have special dietary requirements, it is essential that you inform us on your RSVP card so we can instruct our reception venue accordingly.'},
  {title: '12. Will there be an open bar?', description: 'Complimentary drinks will be served during the cocktail hour. Dinner is accompanied by a half-bottle of wine, and a complimentary toast. All other alcohol must be purchased at the bar, which takes both cash and debit/credit card.'},
  {title: '13. Have you booked hotel room blocks for your guests?', description: 'Yes, we have a block of rooms available for the night before, night of, and night after the wedding ceremony. Please use our wedding code W42005 when booking. To avail of the wedding bed and breakfast rate, it is essential that you book through Cabra Castle’s website, or by calling Cabra Castle at +353 (42) 966-7030.'},
  {title: '14. Can I take pictures during the ceremony to post on social media?', description: 'While we understand you want to cherish the memories from this weekend, we respectfully ask for all guests to refrain from taking photos and videos during the ceremony. Our guests are more than welcome to take photos at the church before and after the ceremony, during the cocktail hour, and the during the reception. Photography when the music and dancing gets started is highly encouraged! We will be making our professional wedding photos available, and all guests are welcome to download and save these images at their leisure.'},
  {title: '15. What’s the best way to RSVP?', description: 'We are providing RSVP cards with our formal invitation. Please mail the RSVP card to Lyndsey and Robert by the 20th of February, 2024.'},
  {title: '16. When is the RSVP deadline?', description: 'Please mail your RSVP by the 20th of February, 2024.'},
  {title: '17. I can\'t attend the wedding in person. Will there be a virtual wedding celebration?', description: 'We are currently confirming the livestream capabilities of the church with our priest, and we will update everyone as our wedding day grows nearer.'},
  {title: '18. I\'m visiting from out of town. What can I do while I\'m in Ireland?', description: 'There is plenty to do in Ireland, and May is notorious for pleasant weather. Our wedding venue is situated halfway between Dublin and Belfast. We recommend flying into Dublin Airport, as it is the most accessible airport in Ireland and the one situated closest to our wedding venues. In Dublin, we recommend enjoying the Guinness Storehouse, the Kilmainham Gaol, or going out to the seaside towns of Howth and Malahide. In Belfast, we recommend going to the Titanic Museum, the Giant’s Causeway, and Bushmills Distillery. If you have specific questions on attractions or locations, we would be happy to provide our opinions and insight.'},
  {title: '19. Do you have a wedding registry?', description: 'Yes, we have registries available at The Wedding Shop, IKEA, and Amazon. Please find the links below in our registry section.'},
  {title: '20. Can I bring my gift to the wedding?', description: 'Your presence is a present in itself, but should you wish to bring a gift to our wedding, there will be a gift table and card box for your convenience.'},
  {title: '21. Will there be any other events to attend during your wedding weekend?', description: 'No, we are only having the one event.'},
  {title: '22. What’s your wedding hashtag?', description: 'We are using the hashtag #OneMooreMetcalfe for our wedding. Please feel free to use this hashtag when posting on social media so we can find all of your photos.'},
  {title: '23. When will the reception end? Will there be an after-party?', description: 'The music and dancing will end at 2 AM. There will be an after party in the resident’s bar for anyone who wishes to extend the craic into the small hours of the morning.'},
  {title: '24. What health and safety measures will you be taking during the event?', description: 'Currently, there are no prevention measures in place in Ireland for COVID-19. Our guests are more than welcome to wear face masks, if desired.'},
  {title: '25. How will you communicate any updated information and/or changes before the wedding?', description: 'Our wedding website is the best source of information in the lead up to our wedding. Please check regularly for any updated information or changes.'},
  {title: '26. What’s the best way to contact you if I have additional questions?', description: 'We are best reached through Facebook Messenger. You may also email us, our emails are lyndseylou98@me.com and robert.metcalfe10@outlook.com.'},
]

export default ShowInvite