import { CSSProperties } from "react";

export interface SpaceProps extends CSSProperties {}

export default function Space({ ...style }: SpaceProps) {
	return <div style={style} />;
}
