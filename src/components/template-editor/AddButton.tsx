import { cn } from "@/lib/utils";

interface AddButtonProps {
	className?: string;
	onClick: () => void;
}

export default function AddButton({ className, onClick }: AddButtonProps) {
	return (
		<button
			onClick={onClick}
			className={cn(
				"border-gray-500 bg-white hidden group-hover:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border justify-center items-center",
				className,
			)}
		>
			+
		</button>
	);
}
