/* eslint-disable no-restricted-imports */
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { ModalProgressBar } from "../../../../../../../_metronic/_partials/controls";

export function SpecificationEditDialogHeader({ id }) {
  const [title, setTitle] = useState("");
  // Specs Redux state
  const actionsLoading = false;
  const specificationForEdit = null;

  useEffect(() => {
    let _title = id ? "" : "New Specification";
    if (specificationForEdit && id) {
      _title = "Edit Specification";
    }

    setTitle(_title);
    // eslint-disable-next-line
  }, [specificationForEdit, actionsLoading]);
  return (
    <>
      {actionsLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">{title}</Modal.Title>
      </Modal.Header>
    </>
  );
}
