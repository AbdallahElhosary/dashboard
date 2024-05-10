import CreateCabinForm from './CreateCabinForm';
import Modal from '../../ui/Modal';
import { useTranslation } from 'react-i18next';
import Button from '../../ui/Button';

function AddCabin() {
  const { t } = useTranslation();


  return (
    <div>

    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>{t("Add New Cabin")}</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
      
    </Modal>
    </div>
  )
}


// function AddCabin() {
//   const [isOpenedModal, setIsOpenedModal] = useState(false);
//   const { t } = useTranslation();

//   return (
//     <div>
//       <Button onClick={() => setIsOpenedModal((show) => !show)}>{t("Add New Cabin")}</Button>

//       {
//         isOpenedModal && <Modal setIsOpenedModal={setIsOpenedModal}>
//           <CreateCabinForm />
//         </Modal>
//       }
//     </div>
//   );
// }

export default AddCabin;
