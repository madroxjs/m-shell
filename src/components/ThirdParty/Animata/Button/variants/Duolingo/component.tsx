import { cn } from "@/lib/utils"

type DuolingoProps = React.HTMLAttributes<HTMLButtonElement>

export function DuolingoButton({className, children, ...props}: DuolingoProps) {
  return (
    <button
      className={cn("box-border inline-block h-11 transform-gpu cursor-pointer touch-manipulation whitespace-nowrap rounded-lg border-b-4 border-solid border-transparent bg-sky-600 px-4 py-3 text-center text-sm font-bold uppercase leading-5 tracking-wider text-white outline-none transition-all duration-200 hover:brightness-110 active:border-b-0 active:border-t-4 active:bg-none disabled:cursor-auto", className)}
      role="button"
      {...props}
    >
      {children}
      <span className="absolute inset-0 -z-10 rounded-lg border-b-4 border-solid border-transparent bg-sky-500" />
    </button>
  );
}
