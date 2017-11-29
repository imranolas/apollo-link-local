import { ApolloLink, Observable } from "apollo-link";
import { execute } from "graphql";

export class LocalLink extends ApolloLink {
  constructor({ schema } = {}) {
    super();
    if (!schema) {
      throw new Error(
        "Local Link expected an exectable schema but received null."
      );
    }
    this.executableSchema = schema;
  }

  request(operation) {
    const { query, variables, operationName } = operation;
    return new Observable(obs => {
      execute(
        this.executableSchema,
        query,
        null,
        operation.getContext(),
        variables,
        operationName
      )
        .then(result => {
          obs.next(result);
          obs.complete();
        })
        .catch(obs.error);
    });
  }
}
