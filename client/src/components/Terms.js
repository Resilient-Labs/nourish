"use client"
import { Link } from "react-router-dom"
import { Modal } from "flowbite-react"
import { useState } from "react"

export default function Terms() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Link onClick={() => setOpenModal(true)}>Terms and Conditions</Link>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          Nourish Terms and Conditions
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base italic leading-relaxed text-gray-700 dark:text-gray-500">
              Last Updated: December, 28th 2023
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Welcome to Nourish, an app dedicated to
              helping users find community fridges in Philadelphia ("Service").
              The Website and Community Page are provided by Nourish ("Company", "we",
              "our", "us"). These Terms and Conditions ("Terms") govern your
              access to and use of the Community Page.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              By accessing or using the Community Page, you agree to be bound
              by these Agreements, which include the Terms and Privacy
              Policy. If you do not agree with any part of these terms, you are
              not permitted to access the Community Page.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The Community Page is a platform for users to exchange
              information, insights, and discussions relevant to community
              fridges in Philadelphia. Use of the Community Page should be
              responsible and in line with the purpose of the Service.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              As a user of the Community Page, you agree not to post or share
              content that is:
            </p>
            <ul className="list-disc text-base text-gray-500 dark:text-gray-400 ml-8">
              <li>
                Illegal, harmful, or offensive, including threatening, abusive,
                defamatory, or discriminatory material.
              </li>
              <li>
                Infringing upon the rights of others, including intellectual
                property.
              </li>
              <li>Linked to harmful software or materials.</li>
              <li>False or misleading, including impersonation of others.</li>
            </ul>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              We reserve the right to moderate, edit, or remove content that we
              determine to be in violation of these Terms or that we find
              objectionable for any reason.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              If you create an account on the Website, you are
              responsible for safeguarding your account and for all activities
              occurring under your account.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The Community Page and Nourish app are provided "as is" without
              any warranties, expressed or implied. We do not guarantee
              uninterrupted or error-free service.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              We may update these Terms from time to time. Notice of significant
              changes will be posted on the Community Page or the Website.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              These Terms are governed by the laws of Pennsylvania, United
              States, without regard to its conflict of law principles.
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
