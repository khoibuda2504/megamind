import { Button, Card, Col, Input, Row, Space } from "antd";
import { BuyerForm, PolicyTable, PolicyForm } from "./ui";
import { useModalStore } from "@/store";
import { StepProcess } from "@/components";
import { parseCurrency, parseUTC } from "@/utilities/helpers";
import { FieldFloat } from "@/components";
import { useForm } from "react-hook-form";
import { useLocalStorage } from "@/hooks";
import { BuyerType, ProductType } from "./types";
import { useCallback, useMemo, useState } from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const Product = () => {
  const { openModal } = useModalStore();

  const [product, setProduct] = useLocalStorage<ProductType>(
    "product",
    {} as ProductType
  );
  const {
    handleSubmit,
    control,
    formState: { isValid },
    setValue,
  } = useForm<BuyerType>({
    mode: "onBlur",
  });
  const isDone = !!product.createdAt;
  const totalFee = useMemo(() => {
    return product.insurances?.map((p) => p.fee).reduce((a, b) => a + b, 0);
  }, [JSON.stringify(product?.insurances)]);
  const [searchValue, setSearchValue] = useState("");
  const filteredInsurances = useMemo(() => {
    return (
      product?.insurances?.filter((p) =>
        p.fullName.toLowerCase().includes(searchValue.toLowerCase())
      ) ?? []
    );
  }, [JSON.stringify(product?.insurances), searchValue]);
  const steps = [
    {
      title: "Insured Objects",
      content: (
        <div>
          <Space className="flex justify-end mb-4">
            <FieldFloat textFloat="Search">
              <Input
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              />
            </FieldFloat>
            {!isDone && (
              <Button
                type="primary"
                onClick={() => {
                  openModal(
                    <PolicyForm
                      onResponse={(data) => {
                        setProduct((prev) => ({
                          ...prev,
                          insurances: [...(prev.insurances ?? []), data],
                        }));
                      }}
                    />
                  );
                }}
              >
                Add
              </Button>
            )}
          </Space>
          <div>
            <PolicyTable
              insurances={filteredInsurances}
              isDone={isDone}
              onResponse={(data) => {
                setProduct((prev) => {
                  return {
                    ...prev,
                    insurances: prev.insurances?.map((p) => {
                      if (p.identity === data.identity) {
                        return data;
                      }
                      return p;
                    }),
                  };
                });
              }}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Buyer Information",
      content: <BuyerForm control={control} isDetail={isDone} />,
    },
    {
      title: "Done",
      content: (
        <div className="p-3 bg-[#EDF7ED] flex gap-2 rounded-md items-start">
          <CheckCircleOutlined className="relative top-1 text-green-600 text-base" />
          <div>
            <p className="font-semibold text-[15px] text-[#1E4620]">
              "New Insurance Policy Registration Successfully!!!"
            </p>
            <span className="text-xs">
              Total fee of the policy is: <b>{parseCurrency(totalFee)}</b>
            </span>
          </div>
        </div>
      ),
    },
  ];
  // callback function to handle disabled next button
  const cbIsValid = useCallback(
    (current: number) => {
      if (current === 0) {
        const length = product?.insurances?.length ?? 0;
        return length > 0;
      }
      return isValid;
    },
    [product?.insurances?.length, isValid]
  );
  // callback function to action next button
  const cbIsOnNext = useCallback(
    (current: number) => {
      if (current === 0) {
        for (const key in product.buyerInfo) {
          setValue(
            key as keyof BuyerType,
            product.buyerInfo[
              key as keyof BuyerType
            ] as BuyerType[keyof BuyerType]
          );
        }
      }
      if (current === 1) {
        handleSubmit((buyerInfo) => {
          setProduct((prev) => {
            return {
              ...prev,
              buyerInfo,
              createdAt: dayjs().toISOString(),
            };
          });
        })();
      }
    },
    [JSON.stringify(product.buyerInfo), setProduct]
  );
  return (
    <Row gutter={[50, 50]}>
      <Col xs={24} xl={18}>
        <form>
          <StepProcess
            steps={steps}
            isPreSubmit
            isDone={isDone}
            isValid={cbIsValid}
            isOnNext={cbIsOnNext}
          />
        </form>
      </Col>
      {!!product?.insurances?.length && (
        <Col xs={24} xl={6}>
          <Card title="Summary">
            <p>
              <b>Creation Date: </b>
              {parseUTC(product.createdAt ? dayjs(product.createdAt) : dayjs())}
            </p>
            {totalFee && (
              <p>
                <b>Fee: </b>
                {parseCurrency(totalFee)}
              </p>
            )}
          </Card>
        </Col>
      )}
    </Row>
  );
};

export default Product;
