type ButttonProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}


export default function ButtonIncrease({ count, setCount }: ButttonProps) {
  return <>
    <button onClick={() => setCount(count + 1)}>
      count is {count}
    </button>
  </>
}