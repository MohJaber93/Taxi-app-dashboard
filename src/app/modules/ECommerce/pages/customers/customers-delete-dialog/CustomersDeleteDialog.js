import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import * as actions from "../../../_redux/customers/customersActions";
import { useCustomersUIContext } from "../CustomersUIContext";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";

export function CustomersDeleteDialog({ show, onHide }) {
  // Customers UI Context
  const customersUIContext = useCustomersUIContext();
  const customersUIProps = useMemo(() => {
    return {
      ids: customersUIContext.ids,
      setIds: customersUIContext.setIds,
      queryParams: customersUIContext.queryParams
    };
  }, [customersUIContext]);

  // Customers Redux state
  const isLoading = false;

  // if customers weren't selected we should close modal
  useEffect(() => {
    if (!customersUIProps.ids || customersUIProps.ids.length === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customersUIProps.ids]);

  // looking for loading/dispatch
  useEffect(() => {}, [isLoading]);

  const deleteCustomers = () => {
    // server request for deleting customer by selected ids
    // dispatch(actions.deleteCustomers(customersUIProps.ids)).then(() => {
    //   // refresh list after deletion
    //   dispatch(actions.fetchCustomers(customersUIProps.queryParams)).then(
    //     () => {
    //       // clear selections list
    //       customersUIProps.setIds([]);
    //       // closing delete modal
    //       onHide();
    //     }
    //   );
    // });
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {/*begin::Loading*/}
      {isLoading && <ModalProgressBar />}
      {/*end::Loading*/}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Customers Delete
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Are you sure to permanently delete selected customers?</span>
        )}
        {isLoading && <span>Customer are deleting...</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={onHide}
            className="btn btn-light btn-elevate"
          >
            Cancel
          </button>
          <> </>
          <button
            type="button"
            onClick={deleteCustomers}
            className="btn btn-primary btn-elevate"
          >
            Delete
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
