
export const listPostsByActive = /* GraphQL */ `
  query ListPostsByActive(
    $visibility: Visibility
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMediaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostsByActive(
      visibility: $visibility
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        initialQuery
        mediaOwnerId
        mediaOwnerUsername
        mediaCreator
        latitude
        longitude
        visibility
        title
        address
        region
        categories
        interests
        description
        type
        viewCount
        likeCount
        visibleCommentCount
        createdAt
        updatedAt
        fromMission
        likedBy
        flagged
        flaggedBy
        flagDescription
        hdUri
        sdUri
        isLocationPrivacyModeEnabled
        thumbnail {
          bucket
          region
          key
          uri
        }
        file {
          bucket
          region
          key
          uri
        }
        mediaOwnerAvatar {
          bucket
          region
          key
          uri
        }
        user {
          id
          userName
          bio
          website
          name
          avatarThumbnail {
            uri
          }
        }
        comments {
          items {
            id
            message
            user {
              id
              userName
            }
          }
        }
      }
      nextToken
    }
  }
`;
