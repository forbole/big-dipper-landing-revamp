import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import {
  Layout,
  SectionBox,
  SectionLimit,
  ContentBox,
} from '@components';
import { useStyles } from './styles';
import { definitions, trackingDefinitions, cookies } from './utils';

const PrivacyPolicy = () => {
  const classes = useStyles();
  const { t } = useTranslation('privacy');
  return (
    <Layout>
      <SectionBox main>
        <SectionLimit className={classes.root}>
          <Typography className="title" variant="h2">
            {t('privacyPolicy')}
          </Typography>
          <Typography className="intro">{t('intro')}</Typography>
          <Typography className="intro">
            Last updated: April 02, 2021
          </Typography>
          <ContentBox>
            <Typography variant="h3">
              Interpretation and Definitions
            </Typography>
            <div className="indent">
              <Typography variant="h4">
                Interpretation
              </Typography>
              <Typography className="description">
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </Typography>
              <Typography variant="h4">
                Definitions
              </Typography>
              <Typography className="description">
                For the purposes of this Privacy Policy:
              </Typography>
              <ul>
                {definitions.map((x) => {
                  return (
                    <Typography component="li" key={x.key}>
                      <span className="key">{x.key}</span>
                      {' '}
                      {x.details}
                      {x.key === 'Website' && (
                        <a href="https://bigdipper.live" target="_blank" rel="noreferrer">https://bigdipper.live</a>
                      )}
                    </Typography>
                  );
                })}
              </ul>
            </div>
            <Typography variant="h3">
              Collecting and Using Your Personal Data
            </Typography>
            <div className="indent">
              <Typography variant="h4">
                Types of Data Collected
              </Typography>
              <div className="indent-2">
                <Typography variant="h5">
                  Personal Data
                </Typography>
                <Typography className="description">
                  While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                </Typography>
                <Typography variant="h5">
                  Usage Data
                </Typography>
                <Typography className="description">
                  Usage Data is collected automatically when using the Service.
                </Typography>
                <Typography className="description">
                  Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                </Typography>
                <Typography className="description">
                  When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
                </Typography>
                <Typography className="description">
                  We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
                </Typography>
                <Typography variant="h5">
                  Tracking Technologies and Cookies
                </Typography>
                <Typography className="description">
                  We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:
                </Typography>
                <ul>
                  {trackingDefinitions.map((x) => {
                    return (
                      <Typography component="li" key={x.key}>
                        <span className="key">{x.key}</span>
                        {' '}
                        {x.details}
                        {x.key === 'Website' && (
                        <a href="https://bigdipper.live" target="_blank" rel="noreferrer">https://bigdipper.live</a>
                        )}
                      </Typography>
                    );
                  })}
                </ul>
                <Typography className="description">
                  Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. You can learn more about cookies here: https://www.termsfeed.com/blog/cookies/
                </Typography>
                <Typography className="description">
                  We use both Session and Persistent Cookies for the purposes set out below:
                </Typography>
                {cookies.map((x) => {
                  return (
                    <React.Fragment key={x.key}>
                      <Typography variant="h6">
                        {x.key}
                      </Typography>
                      <div className="indent-2">
                        <Typography>
                          <span className="key">
                            Type:
                          </span>
                          {' '}
                          {x.type}
                        </Typography>
                        <Typography>
                          <span className="key">
                            Administered By:
                          </span>
                          {' '}
                          {x.administered}
                        </Typography>
                        <Typography>
                          <span className="key">
                            Purpose:
                          </span>
                          {' '}
                          {x.purpose}
                        </Typography>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
            <Typography variant="h3">
              Contact Us
            </Typography>
            <Typography className="description">
              If you have any questions about these Terms and Conditions, You can contact us at info@forbole.com
            </Typography>
          </ContentBox>
        </SectionLimit>
      </SectionBox>
    </Layout>
  );
};

export default PrivacyPolicy;
