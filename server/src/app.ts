import { createApp, createGraphQlServer } from 'core/servers';
import { connectToDB } from 'core/db';
import { envConstants } from 'core/constants';
import { coreResolvers, typeDefs } from 'core/graphql';
import lodashMerge from 'lodash.merge';
import { barInfoTypeDefs, barInfoResolver } from 'pods/bar-info';
import { menuCategoryResolver, menuCategoryTypeDefs } from 'pods/menu-categories';
import { productPortionTypeResolver, productPortionTypeTypeDefs } from 'pods/product-portion';
import { menuResolver, menuTypeDefs } from 'pods/menu';

const app = createApp();

const graphQlServer = createGraphQlServer(app, {
  typeDefs: [typeDefs, barInfoTypeDefs, menuCategoryTypeDefs, productPortionTypeTypeDefs, menuTypeDefs],
  resolvers: lodashMerge(coreResolvers, barInfoResolver, menuCategoryResolver, productPortionTypeResolver, menuResolver),
});

app.listen(envConstants.PORT, async () => {
  if (!envConstants.isMockRepository && envConstants.MONGODB_URI) {
    await connectToDB(envConstants.MONGODB_URI);
  }
  console.log(
    `Using ${envConstants.isMockRepository ? 'Mock' : 'DataBase'
    } for session storage`
  );
  console.log(
    `Server ready at http://localhost:${envConstants.PORT}${graphQlServer.graphqlPath}`
  );
});
