import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { CustomerEditDialogHeader } from "./CustomerEditDialogHeader";
import { CustomerEditForm } from "./CustomerEditForm";
import { useCustomersUIContext } from "../CustomersUIContext";

export function CustomerEditDialog({ id, show, onHide }) {
  // Customers UI Context
  const customersUIContext = useCustomersUIContext();
  const customersUIProps = useMemo(() => {
    return {
      initCustomer: customersUIContext.initCustomer
    };
  }, [customersUIContext]);

  // Customers Redux state
  const actionsLoading = false;
  const customerForEdit = 0;

  useEffect(() => {
    // server call for getting Customer by id
    // dispatch(actions.fetchCustomer(id));
  }, [id]);

  // server request for saving customer
  const saveCustomer = customer => {
    if (!id) {
      // server request for creating customer
      // dispatch(actions.createCustomer(customer)).then(() => onHide());
    } else {
      // server request for updating customer
      // dispatch(actions.updateCustomer(customer)).then(() => onHide());
    }
  };

  return (
    <Modal
      size="lg"
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <CustomerEditDialogHeader id={id} />
      <CustomerEditForm
        saveCustomer={saveCustomer}
        actionsLoading={actionsLoading}
        customer={customerForEdit || customersUIProps.initCustomer}
        onHide={onHide}
      />
    </Modal>
  );
}
