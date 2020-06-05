import 'reflect-metadata';

import { assert } from 'chai';

import { ServiceIdentifiers } from '../../../../src/container/ServiceIdentifiers';

import { IIdentifierNamesGenerator } from '../../../../src/interfaces/generators/identifier-names-generators/IIdentifierNamesGenerator';
import { IInversifyContainerFacade } from '../../../../src/interfaces/container/IInversifyContainerFacade';

import { IdentifierNamesGenerator } from '../../../../src/enums/generators/identifier-names-generators/IdentifierNamesGenerator';

import { InversifyContainerFacade } from '../../../../src/container/InversifyContainerFacade';

describe('MangledIdentifierNamesGenerator', () => {
    describe('generateNext', () => {
        let identifierNamesGenerator: IIdentifierNamesGenerator,
            mangledIdentifierName: string;

        beforeEach(() => {
            const inversifyContainerFacade: IInversifyContainerFacade = new InversifyContainerFacade();

            inversifyContainerFacade.load('', '', {});
            identifierNamesGenerator = inversifyContainerFacade.getNamed<IIdentifierNamesGenerator>(
                ServiceIdentifiers.IIdentifierNamesGenerator,
                IdentifierNamesGenerator.MangledIdentifierNamesGenerator
            );
        });

        describe('Variant #1: initial mangled name', () => {
            const expectedMangledIdentifierName: string = 'a';

            beforeEach(() => {
                mangledIdentifierName = identifierNamesGenerator.generateNext();
            });

            it('should return mangled name', () => {
                assert.equal(mangledIdentifierName, expectedMangledIdentifierName);
            });
        });

        describe('Variant #2: second mangled name', () => {
            const expectedMangledIdentifierName: string = 'b';
            const expectedMangledIdentifierPosition: number = 1;

            beforeEach(() => {
                for (let i: number = 0; i <= expectedMangledIdentifierPosition; i++) {
                    mangledIdentifierName = identifierNamesGenerator.generateNext();
                }
            });

            it('should return mangled name', () => {
                assert.equal(mangledIdentifierName, expectedMangledIdentifierName);
            });
        });

        describe('Variant #3: last mangled name with single character', () => {
            const expectedMangledIdentifierName: string = 'Z';
            const expectedMangledIdentifierPosition: number = 51;

            beforeEach(() => {
                for (let i: number = 0; i <= expectedMangledIdentifierPosition; i++) {
                    mangledIdentifierName = identifierNamesGenerator.generateNext();
                }
            });

            it('should return mangled name', () => {
                assert.equal(mangledIdentifierName, expectedMangledIdentifierName);
            });
        });

        describe('Variant #4: correct increase of mangled name length', () => {
            const expectedMangledIdentifierName: string = 'a0';
            const expectedMangledIdentifierPosition: number = 52;

            beforeEach(() => {
                for (let i: number = 0; i <= expectedMangledIdentifierPosition; i++) {
                    mangledIdentifierName = identifierNamesGenerator.generateNext();
                }
            });

            it('should return mangled name', () => {
                assert.equal(mangledIdentifierName, expectedMangledIdentifierName);
            });
        });

        describe('Variant #5: correct increase of mangled name length #2', () => {
            const expectedMangledIdentifierName: string = 'aa';
            const expectedMangledIdentifierPosition: number = 62;

            beforeEach(() => {
                for (let i: number = 0; i <= expectedMangledIdentifierPosition; i++) {
                    mangledIdentifierName = identifierNamesGenerator.generateNext();
                }
            });

            it('should return mangled name', () => {
                assert.equal(mangledIdentifierName, expectedMangledIdentifierName);
            });
        });

        describe('Variant #6: reserved names', () => {
            const expectedMangledIdentifierName1: string = 'dn';
            const expectedMangledIdentifierName2: string = 'dp';
            const expectedMangledIdentifierPosition1: number = 261;
            const expectedMangledIdentifierPosition2: number = 262;

            let mangledIdentifierName1: string,
                mangledIdentifierName2: string;

            beforeEach(() => {
                for (let i: number = 0; i <= expectedMangledIdentifierPosition2; i++) {
                    mangledIdentifierName = identifierNamesGenerator.generateNext();

                    if (i === expectedMangledIdentifierPosition1) {
                        mangledIdentifierName1 = mangledIdentifierName;
                    } else if (i === expectedMangledIdentifierPosition2) {
                        mangledIdentifierName2 = mangledIdentifierName;
                    }
                }
            });

            it('should return mangled name', () => {
                assert.equal(mangledIdentifierName1, expectedMangledIdentifierName1);
            });

            it('shouldn\'t return reserved mangled name', () => {
                assert.equal(mangledIdentifierName2, expectedMangledIdentifierName2);
            });
        });
    });

    describe('generateForGlobalScope', () => {
        let identifierNamesGenerator: IIdentifierNamesGenerator,
            mangledIdentifierName: string;

        before(() => {
            const inversifyContainerFacade: IInversifyContainerFacade = new InversifyContainerFacade();

            inversifyContainerFacade.load('', '', {
                identifiersPrefix: 'foo'
            });
            identifierNamesGenerator = inversifyContainerFacade.getNamed<IIdentifierNamesGenerator>(
                ServiceIdentifiers.IIdentifierNamesGenerator,
                IdentifierNamesGenerator.MangledIdentifierNamesGenerator
            );
        });

        describe('Variant #1: initial mangled name', () => {
            const expectedMangledIdentifierName: string = 'fooa';

            beforeEach(() => {
                mangledIdentifierName = identifierNamesGenerator.generateForGlobalScope();
            });

            it('should return mangled name with prefix', () => {
                assert.equal(mangledIdentifierName, expectedMangledIdentifierName);
            });
        });

        describe('Variant #2: second mangled name', () => {
            const expectedMangledIdentifierName: string = 'foob';

            beforeEach(() => {
                mangledIdentifierName = identifierNamesGenerator.generateForGlobalScope();
            });

            it('should return mangled name with prefix', () => {
                assert.equal(mangledIdentifierName, expectedMangledIdentifierName);
            });
        });
    });

    describe('isValidIdentifierName (identifierName: string): boolean', () => {
        describe('Variant #1: reserved name as simple string', () => {
            const expectedFirstIdentifier: string = 'a';
            const expectedSecondIdentifier: string = 'd';
            const reservedNames: string[] = ['b', 'c'];

            let identifierNamesGenerator: IIdentifierNamesGenerator,
                firstMangledIdentifierName: string,
                secondMangledIdentifierName: string;

            beforeEach(() => {
                const inversifyContainerFacade: IInversifyContainerFacade = new InversifyContainerFacade();

                inversifyContainerFacade.load('', '', { reservedNames });
                identifierNamesGenerator = inversifyContainerFacade.getNamed<IIdentifierNamesGenerator>(
                    ServiceIdentifiers.IIdentifierNamesGenerator,
                    IdentifierNamesGenerator.MangledIdentifierNamesGenerator
                );

                firstMangledIdentifierName = identifierNamesGenerator.generateNext();
                secondMangledIdentifierName = identifierNamesGenerator.generateNext();
            });

            it('should generate first identifier', () => {
                assert.equal(firstMangledIdentifierName, expectedFirstIdentifier);
            });

            it('should generate second identifier', () => {
                assert.equal(secondMangledIdentifierName, expectedSecondIdentifier);
            });
        });

        describe('Variant #2: reserved name as string regexp', () => {
            const expectedFirstIdentifier: string = 'a';
            const expectedSecondIdentifier: string = 'g';
            const reservedNames: string[] = ['[b|c|d|e|f]'];

            let identifierNamesGenerator: IIdentifierNamesGenerator,
                firstMangledIdentifierName: string,
                secondMangledIdentifierName: string;

            beforeEach(() => {
                const inversifyContainerFacade: IInversifyContainerFacade = new InversifyContainerFacade();

                inversifyContainerFacade.load('', '', { reservedNames });
                identifierNamesGenerator = inversifyContainerFacade.getNamed<IIdentifierNamesGenerator>(
                    ServiceIdentifiers.IIdentifierNamesGenerator,
                    IdentifierNamesGenerator.MangledIdentifierNamesGenerator
                );

                firstMangledIdentifierName = identifierNamesGenerator.generateNext();
                secondMangledIdentifierName = identifierNamesGenerator.generateNext();
            });

            it('should generate first identifier', () => {
                assert.equal(firstMangledIdentifierName, expectedFirstIdentifier);
            });

            it('should generate second identifier', () => {
                assert.equal(secondMangledIdentifierName, expectedSecondIdentifier);
            });
        });
    });
});
