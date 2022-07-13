//colors.ts

interface IDictionary<TValue> {
  [id: string]: TValue;
}
const colors: IDictionary<string> = {
	primary: 'rgb(0, 91, 76)',
	primary80: 'rgb(0, 91, 76, 0.8)',
	secondary: 'rgb(255, 225, 211)',
	gold: 'rgb(227, 154, 84)',
	darkGrey: 'rgb(2, 2, 2, 0.8)',
	darkGrey61: 'rgb(61, 61, 61)',
	black: 'rgb(0, 0, 0)',
	blackT: 'rgb(0, 0, 0, 0.5)',
	white: 'rgb(255, 255, 255)',
	white80: 'rgb(255, 255, 255, 0.2)'
};

export default colors;