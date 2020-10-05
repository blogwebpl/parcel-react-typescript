module.exports = {
	roots: ['<rootDir>/src'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
	moduleNameMapper: {
		'^~/(.*)$': '<rootDir>/src/$1',
	},
};
