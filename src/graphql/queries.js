/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listCommentsByMediaId = /* GraphQL */ `
  query ListCommentsByMediaId($mediaId: ID!) {
    listCommentsByMediaId(mediaId: $mediaId) {
      items {
        id
        mediaId
        missionId
        userId
        commentOwnerId
        message
        createdAt
        updatedAt
        createdBy
        deviceId
        likedBy
        flagged
        flaggedBy
        flagDescription
        visibility
      }
      nextToken
    }
  }
`;
export const listCommentsByMissionId = /* GraphQL */ `
  query ListCommentsByMissionId($MissionId: ID!) {
    listCommentsByMissionId(MissionId: $MissionId) {
      items {
        id
        mediaId
        missionId
        userId
        commentOwnerId
        message
        createdAt
        updatedAt
        createdBy
        deviceId
        likedBy
        flagged
        flaggedBy
        flagDescription
        visibility
      }
      nextToken
    }
  }
`;
export const getTest2 = /* GraphQL */ `
  query GetTest2($id: ID!) {
    getTest2(id: $id) {
      id
      testString
      testBool
      createdAt
      updatedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      oldUserPoolId
      name
      bio
      avatar {
        bucket
        region
        key
        uri
      }
      avatarThumbnail {
        bucket
        region
        key
        uri
      }
      avatarUpdatedAt
      userName
      pushKey
      aboutMe
      website
      email
      phone
      address
      age
      locale
      zoneinfo
      birthdate
      createdAt
      updatedAt
      posts {
        nextToken
      }
      asks {
        nextToken
      }
      comments {
        nextToken
      }
      fulfilledAsks {
        nextToken
      }
      notifications {
        title
        body
        origin
        remote
        hasCategory
        viewed
        visibility
        createdAt
        updatedAt
      }
      sentNotifications {
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        oldUserPoolId
        name
        bio
        avatarUpdatedAt
        userName
        pushKey
        aboutMe
        website
        email
        phone
        address
        age
        locale
        zoneinfo
        birthdate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMedia = /* GraphQL */ `
  query GetMedia($id: ID!) {
    getMedia(id: $id) {
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
      file {
        bucket
        region
        key
        uri
      }
      thumbnail {
        bucket
        region
        key
        uri
      }
      potatoThumbnail {
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
      viewCount
      likeCount
      visibleCommentCount
      likes {
        nextToken
      }
      flags {
        nextToken
      }
      user {
        id
        oldUserPoolId
        name
        bio
        avatarUpdatedAt
        userName
        pushKey
        aboutMe
        website
        email
        phone
        address
        age
        locale
        zoneinfo
        birthdate
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      fromMission
      comments {
        nextToken
      }
      likedBy
      flagged
      flaggedBy
      flagDescription
      hdUri
      sdUri
      isLocationPrivacyModeEnabled
    }
  }
`;
export const listMedias = /* GraphQL */ `
  query ListMedias(
    $filter: ModelMediaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMedias(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      }
      nextToken
    }
  }
`;
export const getMission = /* GraphQL */ `
  query GetMission($id: ID!) {
    getMission(id: $id) {
      id
      address
      title
      categories
      initialQuery
      visibility
      latitude
      longitude
      missionOwnerUsername
      missionOwnerId
      missionClaimerUsername
      missionClaimerId
      status
      onMission
      description
      createdAt
      updatedAt
      experienceId
      likeCount
      visibleCommentCount
      likes {
        nextToken
      }
      flags {
        nextToken
      }
      user {
        id
        oldUserPoolId
        name
        bio
        avatarUpdatedAt
        userName
        pushKey
        aboutMe
        website
        email
        phone
        address
        age
        locale
        zoneinfo
        birthdate
        createdAt
        updatedAt
      }
      fulfiller {
        id
        oldUserPoolId
        name
        bio
        avatarUpdatedAt
        userName
        pushKey
        aboutMe
        website
        email
        phone
        address
        age
        locale
        zoneinfo
        birthdate
        createdAt
        updatedAt
      }
      comments {
        nextToken
      }
      likedBy
      flagged
      flaggedBy
      flagDescription
    }
  }
`;
export const listMissions = /* GraphQL */ `
  query ListMissions(
    $filter: ModelMissionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMissions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        address
        title
        categories
        initialQuery
        visibility
        latitude
        longitude
        missionOwnerUsername
        missionOwnerId
        missionClaimerUsername
        missionClaimerId
        status
        onMission
        description
        createdAt
        updatedAt
        experienceId
        likeCount
        visibleCommentCount
        likedBy
        flagged
        flaggedBy
        flagDescription
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      mediaId
      missionId
      userId
      commentOwnerId
      user {
        id
        oldUserPoolId
        name
        bio
        avatarUpdatedAt
        userName
        pushKey
        aboutMe
        website
        email
        phone
        address
        age
        locale
        zoneinfo
        birthdate
        createdAt
        updatedAt
      }
      media {
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
      }
      mission {
        id
        address
        title
        categories
        initialQuery
        visibility
        latitude
        longitude
        missionOwnerUsername
        missionOwnerId
        missionClaimerUsername
        missionClaimerId
        status
        onMission
        description
        createdAt
        updatedAt
        experienceId
        likeCount
        visibleCommentCount
        likedBy
        flagged
        flaggedBy
        flagDescription
      }
      message
      createdAt
      updatedAt
      createdBy
      deviceId
      likedBy
      flagged
      flaggedBy
      flagDescription
      visibility
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        mediaId
        missionId
        userId
        commentOwnerId
        message
        createdAt
        updatedAt
        createdBy
        deviceId
        likedBy
        flagged
        flaggedBy
        flagDescription
        visibility
      }
      nextToken
    }
  }
`;
export const getTest = /* GraphQL */ `
  query GetTest($id: ID!) {
    getTest(id: $id) {
      id
      testString
      testBool
      createdAt
      updatedAt
    }
  }
`;
export const listTests = /* GraphQL */ `
  query ListTests(
    $filter: ModelTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        testString
        testBool
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      likeOwnerId
      likeOwnerUsername
      media {
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
      }
      mission {
        id
        address
        title
        categories
        initialQuery
        visibility
        latitude
        longitude
        missionOwnerUsername
        missionOwnerId
        missionClaimerUsername
        missionClaimerId
        status
        onMission
        description
        createdAt
        updatedAt
        experienceId
        likeCount
        visibleCommentCount
        likedBy
        flagged
        flaggedBy
        flagDescription
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        likeOwnerId
        likeOwnerUsername
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFlag = /* GraphQL */ `
  query GetFlag($id: ID!) {
    getFlag(id: $id) {
      id
      flagOwnerId
      flagOwnerUsername
      media {
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
      }
      mission {
        id
        address
        title
        categories
        initialQuery
        visibility
        latitude
        longitude
        missionOwnerUsername
        missionOwnerId
        missionClaimerUsername
        missionClaimerId
        status
        onMission
        description
        createdAt
        updatedAt
        experienceId
        likeCount
        visibleCommentCount
        likedBy
        flagged
        flaggedBy
        flagDescription
      }
      flaggedBy
      flagDescription
      flaggedMediaUri
      description
      flagCount
      createdAt
      updatedAt
    }
  }
`;
export const listFlags = /* GraphQL */ `
  query ListFlags(
    $filter: ModelFlagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFlags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        flagOwnerId
        flagOwnerUsername
        flaggedBy
        flagDescription
        flaggedMediaUri
        description
        flagCount
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNewNotification = /* GraphQL */ `
  query GetNewNotification($id: ID!) {
    getNewNotification(id: $id) {
      id
      body
      fromUserId
      fromUserUsername
      fromUser {
        id
        oldUserPoolId
        name
        bio
        avatarUpdatedAt
        userName
        pushKey
        aboutMe
        website
        email
        phone
        address
        age
        locale
        zoneinfo
        birthdate
        createdAt
        updatedAt
      }
      notificationOwnerId
      notificationItemId
      type
      viewed
      visibility
      createdAt
      updatedAt
    }
  }
`;
export const listNewNotifications = /* GraphQL */ `
  query ListNewNotifications(
    $filter: ModelNewNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNewNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        body
        fromUserId
        fromUserUsername
        notificationOwnerId
        notificationItemId
        type
        viewed
        visibility
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
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
      }
      nextToken
    }
  }
`;
export const listAsksByActive = /* GraphQL */ `
  query ListAsksByActive(
    $visibility: Visibility
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMissionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAsksByActive(
      visibility: $visibility
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        address
        title
        categories
        initialQuery
        visibility
        latitude
        longitude
        missionOwnerUsername
        missionOwnerId
        missionClaimerUsername
        missionClaimerId
        status
        onMission
        description
        createdAt
        updatedAt
        experienceId
        likeCount
        visibleCommentCount
        likedBy
        flagged
        flaggedBy
        flagDescription
      }
      nextToken
    }
  }
`;
export const listActiveAsks = /* GraphQL */ `
  query ListActiveAsks(
    $visibility: Visibility
    $sortDirection: ModelSortDirection
    $filter: ModelMissionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActiveAsks(
      visibility: $visibility
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        address
        title
        categories
        initialQuery
        visibility
        latitude
        longitude
        missionOwnerUsername
        missionOwnerId
        missionClaimerUsername
        missionClaimerId
        status
        onMission
        description
        createdAt
        updatedAt
        experienceId
        likeCount
        visibleCommentCount
        likedBy
        flagged
        flaggedBy
        flagDescription
      }
      nextToken
    }
  }
`;
export const notificationsByOwnerId = /* GraphQL */ `
  query NotificationsByOwnerId(
    $notificationOwnerId: String
    $sortDirection: ModelSortDirection
    $filter: ModelNewNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notificationsByOwnerId(
      notificationOwnerId: $notificationOwnerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        body
        fromUserId
        fromUserUsername
        notificationOwnerId
        notificationItemId
        type
        viewed
        visibility
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
