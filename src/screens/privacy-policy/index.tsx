import { Fragment } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@mui/material';
import { Layout, SectionBox, ContentBox } from '@components';
import { StyledSectionLimit } from './styles';
import {
  definitions,
  trackingDefinitions,
  cookies,
  dataUse,
  dataUseTwo,
  legalRequirements,
  analytics,
} from './utils';

const PrivacyPolicy = () => {
  const { t } = useTranslation('privacy');
  return (
    <Layout>
      <SectionBox main>
        <StyledSectionLimit>
          <Typography className="title" variant="h2">
            {t('privacyPolicy')}
          </Typography>
          <Typography className="intro">{t('intro')}</Typography>
          <Typography className="intro">Last updated: April 02, 2021</Typography>
          <ContentBox>
            <Typography variant="h3">Interpretation and Definitions</Typography>
            <div className="indent">
              <Typography variant="h4">Interpretation</Typography>
              <Typography className="description">
                The words of which the initial letter is capitalized have meanings defined under the
                following conditions. The following definitions shall have the same meaning
                regardless of whether they appear in singular or in plural.
              </Typography>
              <Typography variant="h4">Definitions</Typography>
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
                        <a href="https://bigdipper.live" target="_blank" rel="noreferrer">
                          https://bigdipper.live
                        </a>
                      )}
                    </Typography>
                  );
                })}
              </ul>
            </div>
            <Typography variant="h3">Collecting and Using Your Personal Data</Typography>
            <div className="indent">
              <Typography variant="h4">Types of Data Collected</Typography>
              <div className="indent-2">
                <Typography variant="h5">Personal Data</Typography>
                <Typography className="description">
                  While using Our Service, We may ask You to provide Us with certain personally
                  identifiable information that can be used to contact or identify You. Personally
                  identifiable information may include, but is not limited to:
                </Typography>
                <Typography variant="h5">Usage Data</Typography>
                <Typography className="description">
                  Usage Data is collected automatically when using the Service.
                </Typography>
                <Typography className="description">
                  Usage Data may include information such as Your Device&apos;s Internet Protocol
                  address (e.g. IP address), browser type, browser version, the pages of our Service
                  that You visit, the time and date of Your visit, the time spent on those pages,
                  unique device identifiers and other diagnostic data.
                </Typography>
                <Typography className="description">
                  When You access the Service by or through a mobile device, We may collect certain
                  information automatically, including, but not limited to, the type of mobile
                  device You use, Your mobile device unique ID, the IP address of Your mobile
                  device, Your mobile operating system, the type of mobile Internet browser You use,
                  unique device identifiers and other diagnostic data.
                </Typography>
                <Typography className="description">
                  We may also collect information that Your browser sends whenever You visit our
                  Service or when You access the Service by or through a mobile device.
                </Typography>
                <Typography variant="h5">Tracking Technologies and Cookies</Typography>
                <Typography className="description">
                  We use Cookies and similar tracking technologies to track the activity on Our
                  Service and store certain information. Tracking technologies used are beacons,
                  tags, and scripts to collect and track information and to improve and analyze Our
                  Service. The technologies We use may include:
                </Typography>
                <ul>
                  {trackingDefinitions.map((x) => {
                    return (
                      <Typography component="li" key={x.key}>
                        <span className="key">{x.key}</span>
                        {' '}
                        {x.details}
                        {x.key === 'Flash Cookies - ' && (
                          <a
                            href="https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_"
                            target="_blank"
                            rel="noreferrer"
                          >
                            https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_
                          </a>
                        )}
                      </Typography>
                    );
                  })}
                </ul>
                <Typography className="description">
                  Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent
                  Cookies remain on Your personal computer or mobile device when You go offline,
                  while Session Cookies are deleted as soon as You close Your web browser. You can
                  learn more about cookies here: https://www.termsfeed.com/blog/cookies/
                </Typography>
                <Typography className="description">
                  We use both Session and Persistent Cookies for the purposes set out below:
                </Typography>
                {cookies.map((x) => {
                  return (
                    <div key={x.key} className="cookie">
                      <Typography variant="h6">{x.key}</Typography>
                      <div className="indent-2">
                        <Typography>
                          <span className="key">Type:</span>
                          {' '}
                          {x.type}
                        </Typography>
                        <Typography>
                          <span className="key">Administered By:</span>
                          {' '}
                          {x.administered}
                        </Typography>
                        <Typography>
                          <span className="key">Purpose:</span>
                          {' '}
                          {x.purpose}
                        </Typography>
                      </div>
                    </div>
                  );
                })}
                <Typography className="description">
                  For more information about the cookies we use and your choices regarding cookies,
                  please visit our Cookies Policy or the Cookies section of our Privacy Policy.
                </Typography>
              </div>
              <Typography variant="h4">Use of Your Personal Data</Typography>
              <Typography className="description">
                The Company may use Personal Data for the following purposes:
              </Typography>
              <ul>
                {dataUse.map((x) => {
                  return (
                    <Typography component="li" key={x.key}>
                      <span className="key">{x.key}</span>
                      {' '}
                      {x.details}
                    </Typography>
                  );
                })}
              </ul>
              <Typography className="description">
                We may share Your personal information in the following situations:
              </Typography>
              <ul>
                {dataUseTwo.map((x) => {
                  return (
                    <Typography component="li" key={x.key}>
                      <span className="key">{x.key}</span>
                      {' '}
                      {x.details}
                    </Typography>
                  );
                })}
              </ul>
            </div>
            <Typography variant="h3">Retention of Your Personal Data</Typography>
            <Typography className="description">
              The Company will retain Your Personal Data only for as long as is necessary for the
              purposes set out in this Privacy Policy. We will retain and use Your Personal Data to
              the extent necessary to comply with our legal obligations (for example, if we are
              required to retain your data to comply with applicable laws), resolve disputes, and
              enforce our legal agreements and policies.
            </Typography>
            <Typography className="description">
              The Company will also retain Usage Data for internal analysis purposes. Usage Data is
              generally retained for a shorter period of time, except when this data is used to
              strengthen the security or to improve the functionality of Our Service, or We are
              legally obligated to retain this data for longer time periods.
            </Typography>
            <Typography variant="h3">Transfer of Your Personal Data</Typography>
            <Typography className="description">
              Your information, including Personal Data, is processed at the Company&apos;s
              operating offices and in any other places where the parties involved in the processing
              are located. It means that this information may be transferred to — and maintained on
              — computers located outside of Your state, province, country or other governmental
              jurisdiction where the data protection laws may differ than those from Your
              jurisdiction.
            </Typography>
            <Typography className="description">
              Your consent to this Privacy Policy followed by Your submission of such information
              represents Your agreement to that transfer.
            </Typography>
            <Typography className="description">
              The Company will take all steps reasonably necessary to ensure that Your data is
              treated securely and in accordance with this Privacy Policy and no transfer of Your
              Personal Data will take place to an organization or a country unless there are
              adequate controls in place including the security of Your data and other personal
              information.
            </Typography>
            <Typography variant="h3">Disclosure of Your Personal Data</Typography>
            <div className="indent">
              <Typography variant="h4">Business Transactions</Typography>
              <Typography className="description">
                If the Company is involved in a merger, acquisition or asset sale, Your Personal
                Data may be transferred. We will provide notice before Your Personal Data is
                transferred and becomes subject to a different Privacy Policy.
              </Typography>
              <Typography variant="h4">Law enforcement</Typography>
              <Typography className="description">
                Under certain circumstances, the Company may be required to disclose Your Personal
                Data if required to do so by law or in response to valid requests by public
                authorities (e.g. a court or a government agency).
              </Typography>
              <Typography variant="h4">Other legal requirements</Typography>
              <Typography className="description">
                The Company may disclose Your Personal Data in the good faith belief that such
                action is necessary to:
              </Typography>
              <ul>
                {legalRequirements.map((x) => {
                  return (
                    <Typography component="li" key={x}>
                      {x}
                    </Typography>
                  );
                })}
              </ul>
              <Typography variant="h4">Security of Your Personal Data</Typography>
              <Typography className="description">
                The security of Your Personal Data is important to Us, but remember that no method
                of transmission over the Internet, or method of electronic storage is 100% secure.
                While We strive to use commercially acceptable means to protect Your Personal Data,
                We cannot guarantee its absolute security.
              </Typography>
            </div>
            <Typography variant="h3">
              Detailed Information on the Processing of Your Personal Data
            </Typography>
            <Typography className="description">
              The Service Providers We use may have access to Your Personal Data. These third-party
              vendors collect, store, use, process and transfer information about Your activity on
              Our Service in accordance with their Privacy Policies.
            </Typography>
            <div className="indent">
              <Typography variant="h4">Analytics</Typography>
              <Typography className="description">
                We may use third-party Service providers to monitor and analyze the use of our
                Service.
              </Typography>
              <div className="indent-2">
                {analytics.map((x) => {
                  return (
                    <Fragment key={x.key}>
                      <Typography variant="h5">{x.key}</Typography>
                      <Typography className="description">
                        {x.details}
                        {x.key === 'Google Analytics' && (
                          <a
                            href="https://policies.google.com/privacy"
                            target="_blank"
                            rel="noreferrer"
                          >
                            https://policies.google.com/privacy
                          </a>
                        )}
                        {x.key === 'Matomo' && (
                          <a
                            href="https://matomo.org/privacy-policy"
                            target="_blank"
                            rel="noreferrer"
                          >
                            https://matomo.org/privacy-policy
                          </a>
                        )}
                      </Typography>
                    </Fragment>
                  );
                })}
              </div>
            </div>
            <Typography variant="h3">Children&apos;s Privacy</Typography>
            <Typography className="description">
              Our Service does not address anyone under the age of 13. We do not knowingly collect
              personally identifiable information from anyone under the age of 13. If You are a
              parent or guardian and You are aware that Your child has provided Us with Personal
              Data, please contact Us. If We become aware that We have collected Personal Data from
              anyone under the age of 13 without verification of parental consent, We take steps to
              remove that information from Our servers.
            </Typography>
            <Typography className="description">
              If We need to rely on consent as a legal basis for processing Your information and
              Your country requires consent from a parent, We may require Your parent&apos;s consent
              before We collect and use that information.
            </Typography>
            <Typography variant="h3">Links to Other Websites</Typography>
            <Typography className="description">
              Our Service may contain links to other websites that are not operated by Us. If You
              click on a third party link, You will be directed to that third party&apos;s site. We
              strongly advise You to review the Privacy Policy of every site You visit.
            </Typography>
            <Typography className="description">
              We have no control over and assume no responsibility for the content, privacy policies
              or practices of any third party sites or services.
            </Typography>
            <Typography variant="h3">Changes to this Privacy Policy</Typography>
            <Typography className="description">
              We may update Our Privacy Policy from time to time. We will notify You of any changes
              by posting the new Privacy Policy on this page.
            </Typography>
            <Typography className="description">
              We will let You know via email and/or a prominent notice on Our Service, prior to the
              change becoming effective and update the &quot;Last updated&quot; date at the top of
              this Privacy Policy.
            </Typography>
            <Typography className="description">
              You are advised to review this Privacy Policy periodically for any changes. Changes to
              this Privacy Policy are effective when they are posted on this page.
            </Typography>
            <Typography variant="h3">Contact Us</Typography>
            <Typography className="description">
              If you have any questions about these Terms and Conditions, You can contact us at
              info@forbole.com
            </Typography>
          </ContentBox>
        </StyledSectionLimit>
      </SectionBox>
    </Layout>
  );
};

export default PrivacyPolicy;
