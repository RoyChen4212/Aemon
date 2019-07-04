import ActivityCard from './activity-card';
import ActivityComment from './activity-comment';
import ActivityThumbnail, {
  PURCHASE_UPDATED,
  PURCHASE_CLAIMED,
  MEMBER_INVITED,
  MEMBER_JOINED,
  MEMBER_WITHDREW,
  PURCHASE_TIPPED,
  PURCHASE_UNTIPPED,
  PAYMENT_AUTHORIZED,
  PAYMENT_AUTHORIZED_DEPOSIT,
  PAYMENT_AUTHORIZED_REGULAR,
  PAYMENT_AUTHORIZED_LAST,
  PAYMENT_CAPTURED,
  PURCHASE_COMPLETED,
  PURCHASE_COMMENT_CREATED,
} from './activity-thumbnail';
import AddComment from './add-comment';
import Avatar from './avatar';
import Banner from './banner';
import Checkbox from './checkbox';
import ClaimToggle from './claim-toggle';
import Container from './container';
import Divider from './divider';
import EmailPreview from './email-preview';
import FacebookInput from './facebook-input';
import GuestPasswordField from './guest-password-field';
import ModalAlert from './modal-alert';
import MoneyField from './money-field';
import PasswordField from './password-field';
import Picker, { PICKER_EMPTY_VALUE } from './picker';
import Popover from './popover';
import PopoverTooltip from './popover-tooltip';
import { PrimaryButton } from './button';
import PrimaryModal from './primary-modal';
import PurchaseImage from './purchase-image';
import SecondaryModal from './secondary-modal';
import SimpleNumberStepper from './simple-number-stepper';
import { SplitCustom, SplitEven, SplitFixed } from './split';
import Status from './status';
import Subheader from './subheader';
import TextArea from './text-area';
import TextField from './text-field';

const desktop = {
  ActivityCard,
  ActivityComment,
  ActivityThumbnail,
  AddComment,
  Avatar,
  Banner,
  Checkbox,
  ClaimToggle,
  Container,
  Divider,
  EmailPreview,
  FacebookInput,
  GuestPasswordField,
  ModalAlert,
  MoneyField,
  PasswordField,
  Picker,
  Popover,
  PopoverTooltip,
  PrimaryButton,
  PrimaryModal,
  PurchaseImage,
  SecondaryModal,
  SimpleNumberStepper,
  SplitCustom,
  SplitEven,
  SplitFixed,
  Status,
  Subheader,
  TextArea,
  TextField,

  PURCHASE_UPDATED,
  PURCHASE_CLAIMED,
  MEMBER_INVITED,
  MEMBER_JOINED,
  MEMBER_WITHDREW,
  PURCHASE_TIPPED,
  PURCHASE_UNTIPPED,
  PAYMENT_AUTHORIZED,
  PAYMENT_AUTHORIZED_DEPOSIT,
  PAYMENT_AUTHORIZED_REGULAR,
  PAYMENT_AUTHORIZED_LAST,
  PAYMENT_CAPTURED,
  PURCHASE_COMPLETED,
  PURCHASE_COMMENT_CREATED,

  PICKER_EMPTY_VALUE,
};

export default desktop;
