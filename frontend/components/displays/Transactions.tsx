import React from "react";
import pageStyles from "styles/Page.module.scss";
import styles from "styles/Transactions.module.scss";
import { useRouter } from "next/router";
import Portal from "components/base/Portal";
import { AnimatePresence } from "framer-motion";
import EditTransaction from "./EditTransaction";
import { BACKEND_URL } from "lib/IronSession";
import { Transaction } from "pages/dashboard";
import Button from "components/base/Button";

const Transactions = ({ transactions }: { transactions: Transaction[] }) => {
  const router = useRouter();
  const [currentTransaction, setCurrentTransaction] =
    React.useState<Transaction | null>(null);
  const isEditing = router.asPath.includes("edit");
  const [isCreating, setIsCreating] = React.useState(false);

  const handleSubmit = () => {
    setCurrentTransaction(null);
    setIsCreating(false);
    router.replace(router.asPath);
  };

  const handleClose = () => {
    setCurrentTransaction(null);
    setIsCreating(false);
    router.replace(router.asPath);
  };

  return (
    <>
      <div className={pageStyles.displayContainer}>
        <h1 className={pageStyles.displayHeader}>
          Transactions{" "}
          <span className="text-lg font-normal">
            (total: {transactions.length})
          </span>{" "}
          {isEditing && (
            <Button onClick={() => setIsCreating(true)}>
              <i className="fa-solid fa-plus" />
            </Button>
          )}
        </h1>
        <div className={pageStyles.displayContent}>
          <div
            className={styles.scrollableContent}
            style={!isEditing ? { height: "16rem" } : { height: "40rem" }}
          >
           {transactions.map((transaction, index) => {
              return (
                <div
                  key={index}
                  className={
                    styles.displayCard +
                    (isEditing ? " cursor-pointer hover:scale-y-125" : "")
                  }
                  onClick={
                    isEditing
                      ? () => {
                          setCurrentTransaction(transaction);
                        }
                      : undefined
                  }
                >
                  <div className="flex w-full justify-between px-2">
                    <h2 className="text-sm">{transaction.merchant}</h2>
                    <h2 className="text-sm">
                      {transaction.date.toLocaleString()}
                    </h2>
                  </div>
                  <h1 className="text-lg">${transaction.amount}</h1>
                </div>
              );
            })
          }
          </div>
        </div>
      </div>
      <AnimatePresence>
        {(currentTransaction || isCreating) && (
          <EditTransaction
            isCreating={isCreating}
            currentTransaction={
              currentTransaction ? currentTransaction : undefined
            }
            onClose={handleClose}
            onSubmit={handleSubmit}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Transactions;