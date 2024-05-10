import styled from 'styled-components';
import { formatCurrency } from '../../utils/helpers';
import { useTranslation } from 'react-i18next';
import CreateCabinForm from './CreateCabinForm';
import { useDeleteCabin } from './useDeleteCabin';
import { useCreateCabin } from './useCreateCabin';
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';

// v1
// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  height: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`;

const Price = styled.div`
  font-family: 'Sono';
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: 'Sono';
  font-weight: 500;
  color: var(--color-green-700);
`;


function CabinRow({ cabin }) {

  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;


  const { t } = useTranslation();

  const { deleteCabin, isDeleting } = useDeleteCabin()
  const { createCabin, isAdded } = useCreateCabin();

  const handleDuplicate = () => {
    createCabin({
      name: `coby of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    })
  }

  return (
    <Table.Row>
      <Img src={image} loading='lazy' />
      <Cabin>{name}</Cabin>
      <div>{t("Fits up to {{maxCapacity}} guests", { maxCapacity })}</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      <Discount>{discount > 0 ? formatCurrency(discount) : "--"}</Discount>
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={cabinId} />

            <Menus.List id={cabinId}>
              <Menus.Button icon={<HiSquare2Stack />} onClick={handleDuplicate}>Duplicate</Menus.Button>
              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />} onClick={handleDuplicate}>Edit</Menus.Button>
              </Modal.Open>
              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />} onClick={handleDuplicate}>Delete</Menus.Button>
              </Modal.Open>

            </Menus.List>
          
          <Modal.Window name="edit">
            <div style={{ padding: "10px" }}>
              <CreateCabinForm cabinToEdit={cabin} />
            </div>
          </Modal.Window>
          
          <Modal.Window name="delete">
            <ConfirmDelete resource={name}
              disabled={isDeleting}
              onConfirm={() => deleteCabin(cabinId)}
            />
          </Modal.Window>
        </Menus.Menu>
        </Modal>

        
        
      </div>

    </Table.Row>
  );
}


export default CabinRow;
