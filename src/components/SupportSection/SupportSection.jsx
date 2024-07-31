import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatPhoneForLink } from './helper.js';
import { supportSectionPropTypes } from './propType.js';
import { useMemo } from "react";
import UserIcon from './UserIcon.jsx';
import {
  Wrapper,
  InfoWrapper,
  Label,
  Link,
  LinksWrapper,
  MailWrapper,
} from "./style.js";

function SupportSection({ name, email, phone }) {
  const formattedInitials = useMemo(
    () => name.split(" ").reduce((acc, prev) => acc + prev[0], ""),
    [name]
  );

  return (
    <Wrapper>
      <Label>Your feefo support contact</Label>
      <InfoWrapper>
        <UserIcon> 
          <p>{formattedInitials}</p>
        </UserIcon> 
        <MailWrapper>
          <div>{name}</div>
          <LinksWrapper>
            <Link href={`mailto:${email}`}>
              <FontAwesomeIcon
                color='#696969'
                icon={faEnvelope}
              />
              {email}
            </Link>
            <Link href={formatPhoneForLink(phone)}>{phone}</Link>
          </LinksWrapper>
        </MailWrapper>
      </InfoWrapper>
    </Wrapper>
  );
}

SupportSection.propTypes = supportSectionPropTypes

export default SupportSection;
