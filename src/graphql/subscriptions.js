/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCommentByMediaId = /* GraphQL */ `
  subscription OnCreateCommentByMediaId($mediaId: ID!) {
    onCreateCommentByMediaId(mediaId: $mediaId) {
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
export const onUpdateCommentByMediaId = /* GraphQL */ `
  subscription OnUpdateCommentByMediaId($mediaId: ID!) {
    onUpdateCommentByMediaId(mediaId: $mediaId) {
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
export const onCreateCommentByMissionId = /* GraphQL */ `
  subscription OnCreateCommentByMissionId($missionId: ID!) {
    onCreateCommentByMissionId(missionId: $missionId) {
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
export const onUpdateCommentByMissionId = /* GraphQL */ `
  subscription OnUpdateCommentByMissionId($missionId: ID!) {
    onUpdateCommentByMissionId(missionId: $missionId) {
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
export const onCreateMediaByMediaOwnerId = /* GraphQL */ `
  subscription OnCreateMediaByMediaOwnerId($mediaOwnerId: ID!) {
    onCreateMediaByMediaOwnerId(mediaOwnerId: $mediaOwnerId) {
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
export const onUpdateMediaByMediaOwnerId = /* GraphQL */ `
  subscription OnUpdateMediaByMediaOwnerId($mediaOwnerId: ID!) {
    onUpdateMediaByMediaOwnerId(mediaOwnerId: $mediaOwnerId) {
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
export const onCreateNewNotificationByOwnerId = /* GraphQL */ `
  subscription OnCreateNewNotificationByOwnerId($notificationOwnerId: String!) {
    onCreateNewNotificationByOwnerId(
      notificationOwnerId: $notificationOwnerId
    ) {
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
export const onUpdateNewNotificationByOwnerId = /* GraphQL */ `
  subscription OnUpdateNewNotificationByOwnerId($notificationOwnerId: String!) {
    onUpdateNewNotificationByOwnerId(
      notificationOwnerId: $notificationOwnerId
    ) {
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
export const onDeleteNewNotificationByOwnerId = /* GraphQL */ `
  subscription OnDeleteNewNotificationByOwnerId($notificationOwnerId: String!) {
    onDeleteNewNotificationByOwnerId(
      notificationOwnerId: $notificationOwnerId
    ) {
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
export const onUpdateUserByUserId = /* GraphQL */ `
  subscription OnUpdateUserByUserId($id: ID!) {
    onUpdateUserByUserId(id: $id) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateMedia = /* GraphQL */ `
  subscription OnCreateMedia {
    onCreateMedia {
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
export const onUpdateMedia = /* GraphQL */ `
  subscription OnUpdateMedia {
    onUpdateMedia {
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
export const onDeleteMedia = /* GraphQL */ `
  subscription OnDeleteMedia {
    onDeleteMedia {
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
export const onCreateMission = /* GraphQL */ `
  subscription OnCreateMission {
    onCreateMission {
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
export const onUpdateMission = /* GraphQL */ `
  subscription OnUpdateMission {
    onUpdateMission {
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
export const onDeleteMission = /* GraphQL */ `
  subscription OnDeleteMission {
    onDeleteMission {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateTest = /* GraphQL */ `
  subscription OnCreateTest {
    onCreateTest {
      id
      testString
      testBool
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTest = /* GraphQL */ `
  subscription OnUpdateTest {
    onUpdateTest {
      id
      testString
      testBool
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTest = /* GraphQL */ `
  subscription OnDeleteTest {
    onDeleteTest {
      id
      testString
      testBool
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
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
export const onCreateFlag = /* GraphQL */ `
  subscription OnCreateFlag {
    onCreateFlag {
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
export const onUpdateFlag = /* GraphQL */ `
  subscription OnUpdateFlag {
    onUpdateFlag {
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
export const onDeleteFlag = /* GraphQL */ `
  subscription OnDeleteFlag {
    onDeleteFlag {
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
export const onCreateNewNotification = /* GraphQL */ `
  subscription OnCreateNewNotification {
    onCreateNewNotification {
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
export const onUpdateNewNotification = /* GraphQL */ `
  subscription OnUpdateNewNotification {
    onUpdateNewNotification {
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
export const onDeleteNewNotification = /* GraphQL */ `
  subscription OnDeleteNewNotification {
    onDeleteNewNotification {
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
