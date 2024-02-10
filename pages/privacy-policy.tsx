import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ContactPage() {
  return (
    <Page title="Privacy policy">
      <PrivacyPolicyContainer>
        <RichText>
          <p>
            At <strong>Fran Bot</strong>, we prioritize the privacy and security of our users. We believe in transparency regarding the collection and use of personal information on our website. We would like to inform you that we are committed to protecting your privacy, and we do not collect any unnecessary personal data from our users.
          </p>
          <br />
          <strong>
            Here&apos;s what you need to know about our Privacy Policy:<br />
          </strong>
          <ul>
            <li>
              <strong>Data Collection:</strong> We only collect personal information that is necessary to provide our services and enhance user experience. This may include your name, email address, and other contact details provided voluntarily by you.
            </li>
            <li>
              <strong>Usage of Information:</strong> Any personal information collected is used solely for the purpose of providing and improving our services. We do not sell, trade, or share your personal information with third parties without your consent, except as required by law.
            </li>
            <li>
              <strong>Data Security:</strong> We take appropriate measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our website is secured using industry-standard encryption protocols to ensure the security of your data.
            </li>
            <li>
              <strong>Compliance:</strong> We comply with applicable data protection laws and regulations, including the General Data Protection Regulation (GDPR), to ensure that your privacy rights are respected and protected.
            </li>
          </ul>

          <p>
            In conclusion, we want to assure you that your privacy is important to us, and we are committed to maintaining the confidentiality and security of your personal information. If you have any questions or concerns about our Privacy Policy or data practices, please feel free to contact us. Your trust is valuable to us, and we appreciate your continued support.
          </p>
        </RichText>
      </PrivacyPolicyContainer>
    </Page>
  );
}

const PrivacyPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
