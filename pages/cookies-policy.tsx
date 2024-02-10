import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ContactPage() {
  return (
    <Page title="Cookies policy">
      <CookiesPolicyContainer>
        <RichText>
          <p>
            At <strong>
              Fran Bot{' '}
            </strong>, we prioritize the privacy and security of our users. We believe in transparency regarding the use of cookies on our website.
            We would like to inform you that our website does not utilize or collect any cookies from its users. <br /><br />
            Cookies are small pieces of data stored on a user&apos;s device to enhance their browsing experience, track user behavior, or for other purposes.
            However, we have deliberately designed our website in a way that doesn&apos;t require the use of cookies for any functionality or tracking purposes.
          </p>
          <br />
          <strong>
            Here&apos;s why we don&apos;t use cookies:{' '}<br />
          </strong>
          <ul>
            <li>
              <strong>
                User Privacy:
              </strong>{" "}
              We respect your privacy and are committed to safeguarding your personal information.
              By refraining from using cookies, we ensure that no personal data is collected or stored without your explicit consent.
            </li>
            <li>
              <strong>
                Simplified Experience:
              </strong>{" "}
              We believe in providing a streamlined and hassle-free browsing experience for our users. By eliminating the use of cookies, we ensure that you can access our website without encountering unnecessary pop-ups or cookie consent banners.
            </li>
            <li>
              <strong>
                Data Security:
              </strong>{" "}Cookies can potentially pose security risks if not managed properly. By not using cookies, we mitigate any potential security vulnerabilities and prioritize the security of our users&apos; data.
            </li>
            <li>
              <strong>
                Compliance:
              </strong>{" "}While the use of cookies is common practice on many websites, we understand the importance of compliance with data protection regulations such as the General Data Protection Regulation (GDPR). By abstaining from using cookies, we simplify our compliance efforts and ensure adherence to relevant privacy laws.
            </li>
          </ul>

          <p>
            In conclusion, we want to reassure you that your browsing experience on Fran Bot is free from any intrusive tracking or data collection mechanisms.
            Your privacy and security are our top priorities, and we remain committed to providing a safe and transparent online environment for our users.<br /><br />
            If you have any further questions or concerns regarding our cookie policy or privacy practices, please don&apos;t hesitate to contact us.
            We value your feedback and are always here to assist you.<br /><br />
            Thank you for choosing Fran Bot.
          </p>
        </RichText>
      </CookiesPolicyContainer>
    </Page>
  );
}

const CookiesPolicyContainer = styled.div`
  max-width: 85rem;
  margin: auto;
  overflow-x: auto;
`;
